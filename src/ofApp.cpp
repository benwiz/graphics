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
  numCircles = 1;
  circlesCreated = 0;
}

//--------------------------------------------------------------
ofPath ofApp::createArc(int radius, int thickness, int arcLength, ofColor color) {
  ofPath arc;

  ofPoint point(0, 0);
  int start = ofRandom(360);
  int end = start + arcLength;
  int smallRadius = radius - thickness;

  arc.arc(point, radius, radius, start, end);
  arc.arcNegative(point, smallRadius, smallRadius, end, start);
  arc.close();
  arc.setCircleResolution(100);

  arc.setFillColor(color);
  arc.setFilled(true);

  return arc;
}

vector<ofPath> ofApp::createArcsForCircle(int radius, int thickness, ofColor color) {
  vector<ofPath> arcsForCircle;

  // For now create one arc, later create a few. Later will have to consider placement of arcs to avoid overlapping.
  int arcLength = ofRandom(270);
  ofPath arc = createArc(radius, thickness, arcLength, color);
  arcsForCircle.push_back(arc);

  return arcsForCircle;
}

void ofApp::update() {
  while (circlesCreated < numCircles) {
    ofColor color(0, 100, 200, 127);
    vector<ofPath> arcsForCircle = createArcsForCircle(100, 10, color);
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

//  for (int i=0; i<arcs.size(); i++) {
//    ofPath arc = arcs[i];
//    arc.draw();
//  }

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
