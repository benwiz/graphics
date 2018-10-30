#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup() {
  ofBackground(255);
  ofSetCircleResolution(100);

  shapes.setup(5);
  lines.setup(shapes.getShapes());
  wavearea.setup(8);
  dotfield.setup(8, 12);
}

//--------------------------------------------------------------
void ofApp::update() {
  shapes.update();
  lines.update(shapes.getShapes());
  wavearea.update();
  dotfield.update();
}

//--------------------------------------------------------------
void ofApp::draw() {
  ofSetBackgroundColor(ofColor::white);
  ofSetColor(0);

  shapes.draw();
  wavearea.draw();
  lines.draw();
  dotfield.draw();
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key) {
  if (key == ' ') {
    // Reset
    ofBackground(255);
    shapes.reset();
    lines.reset();
    wavearea.reset();
    dotfield.reset();
    this->setup();
  } else if (key == 's') {
    // Save image
    string filename = ofGetTimestampString() + ".png";
    ofSaveScreen(filename);
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

//--------------------------------------------------------------
void ofApp::reset() {}
