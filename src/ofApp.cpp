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
  numCircles = 15;
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

  // TODO: Either eliminate the overlap of arcs within the same circle or ensure that a min gap exists between each arc.
  int numArcs = ofRandom(1, 5);

  for (int i=0; i<numArcs; i++) {
    int arcLength = ofRandom(110);
    ofPath arc = createArc(radius, thickness, arcLength, color);
    arcsForCircle.push_back(arc);
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
