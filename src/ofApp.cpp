#include "ofApp.h"

//--------------------------------------------------------------
vector<ofColor> ofApp::createColorPaletteDynamically(int numColors) {
  vector<ofColor> colors;
  for (int i = 0; i < numColors; i++) {
    int r = ofRandom(0, 20);
    int g = ofRandom(30, 100);
    int b = ofRandom(80, 200);
    int a = ofRandom(100, 200);
    ofColor color(r, g, b, a);
    colors.push_back(color);
  }

  return colors;
}

vector<ofColor> ofApp::createColorPaletteManually() {
  vector<ofColor> colors;

  int r, g, b, a;
  ofColor color;

  r = 0;
  g = 200;
  b = 0;
  a = 127;
  color = ofColor(r, g, b, a);
  colors.push_back(color);

  r = 200;
  g = 0;
  b = 0;
  a = 127;
  color = ofColor(r, g, b, a);
  colors.push_back(color);

  r = 0;
  g = 0;
  b = 200;
  a = 127;
  color = ofColor(r, g, b, a);
  colors.push_back(color);

  r = 0;
  g = 200;
  b = 200;
  a = 127;
  color = ofColor(r, g, b, a);
  colors.push_back(color);

  r = 200;
  g = 200;
  b = 0;
  a = 127;
  color = ofColor(r, g, b, a);
  colors.push_back(color);

  return colors;
}

vector<ofColor> ofApp::createColorPalette(int numColors) {
  if (numColors > 0) {
    return createColorPaletteDynamically(numColors);
  } else {
    return createColorPaletteManually();
  }
}

void ofApp::setup() {
  // Window size
  int width = 500;
  int height = 500;
  ofSetWindowShape(width, height);

  // Background
  ofBackground(255);

  // Init variables
  numCircles = 11;
  circlesCreated = 0;
  numColors = 0; // if greater than 0, randomly generate colors else use
                 // hardcoded palette
  colors = createColorPalette(numColors);
}

//--------------------------------------------------------------
vector<ofPath> ofApp::createArc(int radius, int thickness, int start,
                                int arcLength, ofColor color) {
  ofPath arc;

  // Calculate parameters of the arc
  ofPoint point(0, 0);
  int end = start + arcLength;
  int smallRadius = radius - thickness;

  // Create the arc
  arc.arc(point, radius, radius, start, end);
  arc.arcNegative(point, smallRadius, smallRadius, end, start);
  arc.close();
  arc.setCircleResolution(100);

  // Set the coloring
  arc.setFillColor(color);
  arc.setFilled(true);

  //
  // Now, do nearly identical calculations so that we can get another arc that
  // will be the border
  //
  ofPath borderArc;

  // Calculate the parameters of the border arc
  radius = radius + 1;
  smallRadius = smallRadius - 1;

  // Create the border arc
  borderArc.arc(point, radius, radius, start, end);
  borderArc.arcNegative(point, smallRadius, smallRadius, end, start);
  borderArc.close();
  borderArc.setCircleResolution(100);

  // Set the coloring
  borderArc.setColor(255);
  borderArc.setFilled(false);

  // Return both arcs. This is probably not a very good C or C++ way of
  // returning two vectors.
  vector<ofPath> arcs = {arc, borderArc};
  return arcs;
}

vector<ofPath> ofApp::createArcsForCircle(int radius, int thickness,
                                          ofColor color) {
  vector<ofPath> arcsForCircle;

  // Draw arcs
  int angle = 0;
  int firstAngle = 360;
  bool isFirstLoop = true;
  while (angle < 360) {
    // Insert a gap between arcs
    angle += ofRandom(40);

    // Exit if we will start overlapping the first angle
    if (isFirstLoop == false && angle >= firstAngle) {
      break;
    }

    // Select an arc length
    int maxArcLength = std::min(firstAngle - angle, 270);
    int arcLength = ofRandom(10, maxArcLength);

    // Create the arc
    vector<ofPath> arcs = createArc(radius, thickness, angle, arcLength, color);
    arcsForCircle.push_back(arcs[0]);

    // Record first angle on top of 360
    if (isFirstLoop) {
      firstAngle += angle;
      isFirstLoop = false;
    }

    // Update the angle to the end of the arc
    angle += arcLength;
  }

  return arcsForCircle;
}

void ofApp::update() {
  int radius = ofRandom(50, 100);
  while (circlesCreated < numCircles) {
    ofColor color =
        colors[circlesCreated % colors.size()]; // TODO: Maybe this is better of
                                                // as random int for inde
    int a = 5;
    radius += ofRandom(a, 12);
    int thickness = ofRandom(a, 15);
    vector<ofPath> arcsForCircle =
        createArcsForCircle(radius, thickness, color);
    arcs.insert(arcs.end(), arcsForCircle.begin(), arcsForCircle.end());
    circlesCreated++;
  }
}

//--------------------------------------------------------------
void ofApp::draw() {
  ofPushMatrix();
  ofTranslate(ofGetWindowWidth() / 2, ofGetWindowHeight() / 2);

  for (auto arc : arcs) {
    arc.draw();
  }

  ofPopMatrix();
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key) {
  if (key == ' ') {
    // Clear screen by emptying arcs, resetting counter, and creating a new
    // color palette
    arcs.clear();
    circlesCreated = 0;
    if (numColors > 0)
      colors = createColorPalette(numColors);
  } else if (key == 's') {
    // Save screen
    ofSaveScreen("concentricGears_" + ofGetTimestampString() + ".png");
  }
}

//--------------------------------------------------------------
void ofApp::keyReleased(int key) {}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y) {}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button) {}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button) {}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button) {}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y) {}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y) {}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h) {}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg) {}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo) {}
