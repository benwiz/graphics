

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
  vector<ofColor> colors = {
      //      // Initial
      //      ofColor(0, 200, 0, 128), ofColor(200, 0, 0, 128), ofColor(0, 0,
      //      200, 128),
      //      ofColor(0, 200, 200, 128), ofColor(200, 200, 0, 128),

      // Rainbow

//      // Royal
//    ofColor(230, 57, 70, 128),
//    ofColor(241, 250, 238, 128),
//    ofColor(168, 218, 220, 128),
//    ofColor(69, 123, 157, 128),
//    ofColor(29, 53, 87),

//    // Idk
//    ofColor(100, 200, 139, 128),
//    ofColor(253, 100, 252, 128),
//    ofColor(46, 196, 182, 128),
//    ofColor(231, 29, 54, 128),
//    ofColor(255, 159, 28, 128),

//    // Green-Purple
//    ofColor(188, 231, 132, 128),
//    ofColor(93, 211, 58, 128),
//    ofColor(52, 138, 167, 128),
//    ofColor(82, 81, 200, 128),
//    ofColor(102, 50, 123, 128),

//    // Blues
//    ofColor(0, 0, 255, 128),
//    ofColor(0, 15, 240, 128),
//    ofColor(0, 30, 225, 128),
//    ofColor(3, 55, 200, 128),
//    ofColor(5, 80, 175, 128),
//    ofColor(10, 100, 155, 128),

//    // Greens?
//    ofColor(0, 255, 0, 128),
//    ofColor(0, 255, 100, 128),
//    ofColor(0, 255, 150, 128),
//    ofColor(70, 255, 50, 128),
//    ofColor(50, 200, 14, 128),
//    ofColor(100, 255, 100, 128),

    // Rainbow
    ofColor(255, 0, 0, 128),
    ofColor(255, 165, 0, 128),
    ofColor(255, 255, 0, 128),
    ofColor(0, 255, 0, 128),
    ofColor(0, 0, 255, 128),
    ofColor(75, 0, 130, 128),
    ofColor(238, 130, 238, 128),
  };

  //  colors.push_back(ofColor(0, 200, 0, 128));
  //  colors.push_back(ofColor(200, 0, 0, 128));
  //  colors.push_back(ofColor(0, 0, 200, 128));
  //  colors.push_back(ofColor(0, 200, 200, 128));
  //  colors.push_back(ofColor(200, 200, 0, 128));

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
  int width = 1000;
  int height = 1000;
  ofSetWindowShape(width, height);

  // Background
  ofBackground(255);

  // Init variables
  numCircles = 12;
  circlesCreated = 0;
  numColors = 0; // if greater than 0, randomly generate colors else use
                 // hardcoded palette
  colors = createColorPalette(numColors);
  selectRandomColors = false; // select random colors from palette
}

//--------------------------------------------------------------
ofPath ofApp::createArc(int radius, int thickness, int start, int arcLength,
                        ofColor color) {
  ofPath arc;

  // Calculate parameters of the arc
  ofPoint point(0, 0);
  int end = start + arcLength;
  int smallRadius = radius - thickness;

  // Create the arc
  arc.arc(point, radius, radius, start, end);
  arc.arcNegative(point, smallRadius, smallRadius, end, start);
  arc.close();
  arc.setCircleResolution(255);

  // Set the coloring
  arc.setFilled(true);
  arc.setFillColor(color);

  return arc;
}

ofPath ofApp::createBorderArc(int radius, int thickness, int start,
                              int arcLength, ofColor color) {
  ofPath arc;

  // Calculate parameters of the arc
  ofPoint point(0, 0);
  int end = start + arcLength;
  int smallRadius = radius - thickness;

  // Move the drawing point to the first point
  float x = radius * cos(ofDegToRad(start));
  float y = radius * sin(ofDegToRad(start));
  arc.moveTo(x, y);

  // Create the arc
  arc.arc(point, radius, radius, start, end);
  arc.arcNegative(point, smallRadius, smallRadius, end, start);
  arc.close();
  arc.setCircleResolution(255);

  // Set the coloring
  arc.setFilled(false);
  arc.setStrokeWidth(1);
  arc.setStrokeColor(ofColor::white);

  return arc;
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
    ofPath arc = createArc(radius, thickness, angle, arcLength, color);
    arcsForCircle.push_back(arc);

    // Create the border arc
    ofPath borderArc =
        createBorderArc(radius, thickness, angle, arcLength, color);
    arcsForCircle.push_back(borderArc);

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
    ofColor color;
    if (selectRandomColors) {
      color = colors[ofRandom(colors.size())];
    } else {
      color = colors[circlesCreated % colors.size()];
    }
    radius += ofRandom(ofGetWidth() / 100, ofGetWidth() / 30);
    int thickness = ofRandom(ofGetWidth() / 100, ofGetWidth() / 25);
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

  // Draw arcs
  for (int i = 0; i < arcs.size(); i += 2) {
    ofPath arc = arcs[i];
    arc.draw();
  }

  // Draw border arcs
  for (int i = 1; i < arcs.size(); i += 2) {
    ofPath arc = arcs[i];
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
