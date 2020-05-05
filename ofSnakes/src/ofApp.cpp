#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup() {
  int width = 700;
  int height = 700;
  ofSetWindowShape(width, height);
  ofBackground(ofColor::cornsilk);

  snakes.setup(10);
}

//--------------------------------------------------------------
void ofApp::update() {
  snakes.update();
}

//--------------------------------------------------------------
void ofApp::draw() {
  snakes.draw();
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key) {
  if (key == ' ') {
    snakes.reset();
  } else if (key == 's') {
//    // Save screen
//    std::string filename = ofGetTimestampString() + ".png";
//    ofSaveScreen(filename);
//    cout << "Saved file: " << filename << endl;
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
