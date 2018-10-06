

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
  numLines = 10;
  numRectangles = 0;
  numBackgroundRectangles = ofRandom(2);
}

//--------------------------------------------------------------
ofPath ofApp::createBackgroundRectangle(ofColor color) {
  ofPath rectangle;

  int x = ofRandom(ofGetWidth());
  int y = ofRandom(ofGetHeight());
  int w = ofRandom(120, 300);
  int h = ofRandom(20, 80);
  rectangle.rectangle(x, y, w, h);

  rectangle.setFilled(true);
  rectangle.setFillColor(color);

  return rectangle;
}

vector<ofPath> ofApp::createBackgroundRectangles(int n) {
  vector<ofPath> newBackgroundRectangles;

  for (int i = 0; i < n; i++) {
    ofPath rectangle = createBackgroundRectangle(ofColor::lightBlue);
    newBackgroundRectangles.push_back(rectangle);
  }

  return newBackgroundRectangles;
}

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
  rectangle.lineTo(600, 300);
  rectangle.lineTo(600, 500);
  rectangle.lineTo(300, 500);
  rectangle.close();

  rectangle.setFilled(true);
  rectangle.setFillColor(color);

  return rectangle;
}

vector<ofPath> ofApp::createRectangles(int n, vector<ofPath> lines) {
  // For each line
  for (int i = 0; i < lines.size(); i++) {
    ofPath line = lines[i];
    ofPoint start = line.getOutline()[0].getVertices()[0];
    ofPoint end = line.getOutline()[0].getVertices()[1];

    // Find intersection with each other line
    for (int j = 0; j < lines.size(); j++) {
      if (i == j) continue;

      // TODO: Set equations equal to each other
      // TODO: Solve for X
      // TODO: Plug in X into original equation and solve for Y.
      // Don't forget lines may be parallel and have no intersection.
    }
  }

  vector<ofPath> newRectangles;

  for (int i = 0; i < n; i++) {
    ofPath rectangle = createRectangle(ofColor::blue);
    newRectangles.push_back(rectangle);
  }

  return newRectangles;
}

void ofApp::update() {
  if (!done) {
    // Create background rectangles
    vector<ofPath> newBackgroundRectangles =
        createBackgroundRectangles(numBackgroundRectangles);
    backgroundRectangles.insert(backgroundRectangles.end(),
                                newBackgroundRectangles.begin(),
                                newBackgroundRectangles.end());

    // Create lines
    vector<ofPath> newLines = createLines(numLines);
    lines.insert(lines.end(), newLines.begin(), newLines.end());

    // Create rectangles
    vector<ofPath> newRectangles = createRectangles(numRectangles, lines);
    rectangles.insert(rectangles.end(), newRectangles.begin(),
                      newRectangles.end());

    done = true;
  }
}

//--------------------------------------------------------------
void ofApp::draw() {
  // Draw background rectangles
  for (int i = 0; i < backgroundRectangles.size(); i++) {
    ofPath backgroundRectangle = backgroundRectangles[i];
    backgroundRectangle.draw();
  }

  // Draw lines
  for (int i = 0; i < lines.size(); i++) {
    ofPath line = lines[i];
    line.draw();
  }

  // Draw rectangles
  for (int i = 0; i < rectangles.size(); i++) {
    ofPath rectangle = rectangles[i];
    rectangle.draw();
  }
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key) {
  if (key == ' ') {
    // Clear screen by emptying vectors and resetting the "done" boolean
    backgroundRectangles.clear();
    lines.clear();
    rectangles.clear();
    numBackgroundRectangles = ofRandom(2);
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
