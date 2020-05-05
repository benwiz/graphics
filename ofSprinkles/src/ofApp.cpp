#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup() {
  backgroundColor = ofColor(ofColor::aquamarine);

  vector<ofColor> palette{
      ofColor::red,   ofColor::blue, ofColor::green,  ofColor::yellow,
      ofColor::white, ofColor::pink, ofColor::orange,
  };

  float minX = 0.1 * ofGetWidth();
  float minY = 0.1 * ofGetHeight();
  float maxX = 0.9 * ofGetWidth();
  float maxY = 0.9 * ofGetHeight();

  int n = 500;
  for (int i = 0; i < n; i++) {
    float x = ofRandom(minX, maxX);
    float y = ofRandom(minY, maxY);
    float w = 20;
    float h = 4;
    ofColor color = palette[int(ofRandom(palette.size()))];
    Sprinkle sprinkle(x, y, w, h, color);
    sprinkles.push_back(sprinkle);
  }
}

//--------------------------------------------------------------
void ofApp::update() {}

//--------------------------------------------------------------
void ofApp::draw() {
  ofBackground(backgroundColor);
  for (Sprinkle &sprinkle : sprinkles) {
    sprinkle.draw();
  }
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key) {
  if (key == ' ') {
    sprinkles.clear();
    setup();
  } else if (key == 's') {
    // Save screen
    std::string filename = ofGetTimestampString() + ".png";
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
