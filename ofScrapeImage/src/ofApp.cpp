#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup() {
  ofBackground(ofColor::white);

  // Load and resize image if too large
  img.load("/Users/benwiz/Desktop/trees1.jpg");
  float width = img.getWidth();
  float height = img.getHeight();
  if (width > ofGetWidth() || height > ofGetHeight()) {
    float aspectRatio = width / height;
    if (width > height) {
      width = ofGetWidth();
      height = width / aspectRatio;
    } else {
      height = ofGetHeight();
      width = height * aspectRatio;
    }
    img.resize(width, height);
  }

  // Set key variables
  stage = 0;
  step = 1;
  scrapeAngle = 90;
  scrapeLength = 150;
}

//--------------------------------------------------------------
void ofApp::update() {}

//--------------------------------------------------------------
void ofApp::draw() {
  // Set color to white because this impacts drawing the image
  ofSetColor(ofColor::white);
  img.draw(0, 0);

  // Stage 0: Draw the polyline
  if (stage == 0) {
    ofSetColor(ofColor::magenta);
    polyline.draw();

  }
  // Stage 1: Draw the scrape
  else if (stage == 1) {
    float currLength = 0;
    ofPoint point = polyline.getPointAtLength(currLength);
    ofPoint finalPoint = polyline.getPointAtPercent(1.0);
    // Loop until we reach the last point
    while (point != finalPoint) {
      // Get the current point and its color
      point = polyline.getPointAtLength(currLength);
      ofColor color = img.getColor(point.x, point.y);
      ofSetColor(color);

      // Draw all points in the scrapeAngle direction
      float x = point.x;
      float y = point.y;
      float z = ofRandom(1, 5);
      float maxLength = scrapeLength + ofRandom(50);
      float dist = 0;
      while (
          /*x >= 0 && x <= img.getWidth() && y >= 0 && y <= img.getHeight() &&*/
          dist < maxLength) {
        ofDrawCircle(x, y, z, 1);
        x += cos(ofDegToRad(scrapeAngle));
        y += sin(ofDegToRad(scrapeAngle));
        dist += 1;
      }

      // Increment the length
      currLength += step;
    }
  }
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key) {
  if (key == ' ') {
    // Reset
    polyline.clear();
    img.draw(0, 0);
    stage = 0;
  } else if (key == 'z') {
    // Scrape
    img.draw(0, 0);
    stage = 1;
  }
}

//--------------------------------------------------------------
void ofApp::keyReleased(int key) {}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y) {}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button) {
  // Add point to polyline
  polyline.curveTo(x, y);
}

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
