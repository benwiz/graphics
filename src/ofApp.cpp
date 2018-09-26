#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup() {
  // Window size
  int width = 500;
  int height = 500;
  ofSetWindowShape(width, height);

  // Background
  ofBackground(255);

  // Init variables
  numCircles = 10;
  circlesCreated = 0;
}

//--------------------------------------------------------------
ofPath ofApp::createArc(int radius, int thickness, int start, int arcLength, ofColor color) {
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

  return arc;
}

vector<ofPath> ofApp::createArcsForCircle(int radius, int thickness, ofColor color) {
  vector<ofPath> arcsForCircle;

  // Draw arcs
  int angle = 0;
  int firstAngle = 360;
  bool isFirstLoop = true;
  while (angle < 360) {
    // Insert a gap between arcs
    angle += ofRandom(60);

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
  while (circlesCreated < numCircles) {
    ofColor color(0, ofRandom(30, 100), ofRandom(80, 200), 127); // TODO: Use a color palette
    int radius = ofRandom(20, 200); // TODO: Ensure that there is only some overlap between circles
    int thickness = ofRandom(5, 15);
    vector<ofPath> arcsForCircle = createArcsForCircle(radius, thickness, color);
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
void ofApp::keyPressed(int key) {}

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
