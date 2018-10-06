#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup() {
  // Window size
  int width = 1000;
  int height = 1000;
  ofSetWindowShape(width, height);

  // Background
  ofBackground(255);

  // Globals
  done = false;
  strokeWidth = 5;
}

//--------------------------------------------------------------
ofPath ofApp::createLine() {
  // Select horizontal or vertical
  bool horizontal = int(ofRandom(2)) == 0;

  // Select x and y
  int x1, y1, x2, y2;
  if (horizontal) {
    x1 = 0;
    y1 = ofRandom(ofGetHeight());
    x2 = ofGetWidth();
    y2 = y1;
  } else {
    x1 = ofRandom(ofGetWidth());
    y1 = 0;
    x2 = x1;
    y2 = ofGetHeight();
  }

  // Create line
  ofPath line;
  line.moveTo(x1, y1);
  line.lineTo(x2, y2);
  line.setStrokeWidth(strokeWidth);
  line.setStrokeColor(ofColor::black);

  return line;
}

vector<ofPath> ofApp::createLines(int n) {
  vector<ofPath> newLines;

  for (int i = 0; i < n; i++) {
    ofPath line = createLine();
    newLines.push_back(line);
  }

  return newLines;
}

ofPath ofApp::createRectangle(ofColor color) {
  ofPath rectangle;

  rectangle.moveTo(300, 300);
  rectangle.lineTo(500, 300);
  rectangle.lineTo(500, 500);
  rectangle.lineTo(300, 500);
  rectangle.close();

  rectangle.setFilled(true);
  rectangle.setFillColor(color);

  return rectangle;
}

vector<ofPath> ofApp::createRectangles(int n, vector<ofPath> lines) {
  vector<ofPath> newRectangles;

  for (int i=0; i<n; i++) {
    ofPath rectangle = createRectangle(ofColor::blue);
    newRectangles.push_back(rectangle);
  }

  return newRectangles;
}

void ofApp::update() {
  if (!done) {
    // Create lines
    vector<ofPath> newLines = createLines(10);
    lines.insert(lines.end(), newLines.begin(), newLines.end());

    // Create rectangles
    vector<ofPath> newRectangles = createRectangles(1, lines);
    rectangles.insert(rectangles.end(), newRectangles.begin(),
                      newRectangles.end());

    done = true;
  }
}

//--------------------------------------------------------------
void ofApp::draw() {
  // Draw lines
  for (int i = 0; i < lines.size(); i++) {
    ofPath line = lines[i];
    line.draw();
  }

  // Draw rectangles
  for (int i = 0; i< rectangles.size(); i++) {
    ofPath rectangle = rectangles[i];
    rectangle.draw();
  }
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key) {
  if (key == ' ') {
    // Clear screen by emptying lines and resetting the "done" boolean
    lines.clear();
    done = false;
  } else if (key == 's') {
    // Save screen
    ofSaveScreen("mondrian_" + ofGetTimestampString() + ".png");
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
