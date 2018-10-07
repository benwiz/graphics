

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

ofPath ofApp::createRectangle(ofPoint upperLeft, ofPoint upperRight,
                              ofPoint lowerRight, ofPoint lowerLeft,
                              ofColor color) {
  ofPath rectangle;

  rectangle.moveTo(upperLeft);
  rectangle.lineTo(upperRight);
  rectangle.lineTo(lowerRight);
  rectangle.lineTo(lowerLeft);
  rectangle.close();

  rectangle.setFilled(true);
  rectangle.setFillColor(color);

  return rectangle;
}

vector<ofPath> ofApp::createRectangles(int n, vector<ofPath> lines) {
  // Store intersection points
  vector<ofPoint> intersections;

  // For each line
  for (int i = 0; i < lines.size(); i++) {
    ofPath line1 = lines[i];
    ofPoint start1 = line1.getOutline()[0].getVertices()[0];
    ofPoint end1 = line1.getOutline()[0].getVertices()[1];

    // Add the start and end points
    intersections.push_back(start1);
    intersections.push_back(end1);

    // Find intersection with each other line
    for (int j = 0; j < lines.size(); j++) {
      if (i == j)
        continue;

      ofPath line2 = lines[j];
      ofPoint start2 = line2.getOutline()[0].getVertices()[0];
      ofPoint end2 = line2.getOutline()[0].getVertices()[1];

      // Confirm one line is vertical and the other is horizontal. To do this,
      // check that one line has matching y-values and the other line has
      // matching y-values.
      // 1 is vertical, 2 is horizontal
      bool test1 = start1.x == end1.x && start2.y == end2.y;
      // 1 is horizontal, 2 is vertical
      bool test2 = start1.y == end1.y && start2.x == end2.x;

      // Find intersection
      ofPoint intersection;
      if (test1) {
        intersection.x = start1.x;
        intersection.y = start2.y;
      } else if (test2) {
        intersection.x = start2.x;
        intersection.y = start1.y;
      } else {
        continue;
      }

      intersections.push_back(intersection);
    }
  }

  //  // Check if 4 corners have been added, if not, add them.
  //  bool has_0_0, has_0_max, has_max_0, has_max_max;
  //  for (int i = 0; i < intersections.size(); i++) {
  //    ofPoint intersection = intersections[i];
  //    if (intersection.x == 0 && intersection.y == 0) {
  //      has_0_0 = true;
  //    } else if (intersection.x == 0 && intersection.y == ofGetHeight()) {
  //      has_0_max = true;
  //    } else if (intersection.x == ofGetWidth() && intersection.y == 0) {
  //      has_max_0 = true;
  //    } else if (intersection.x == ofGetWidth() && intersection.y ==
  //    ofGetHeight()) {
  //      has_max_max = true;
  //    }
  //  }
  //  printf("%d %d %d %d\n", has_0_0, has_0_max, has_max_0, has_max_max);
  //  if (!has_0_0) intersections.push_back(ofPoint(0, 0));
  //  if (!has_0_max) intersections.push_back(ofPoint(0, ofGetHeight()));
  //  if (!has_max_0) intersections.push_back(ofPoint(ofGetWidth(), 0));
  //  if (!has_max_max) intersections.push_back(ofPoint(ofGetWidth(),
  //  ofGetHeight()));

  intersections.push_back(ofPoint(0, 0));
  intersections.push_back(ofPoint(0, ofGetHeight()));
  intersections.push_back(ofPoint(ofGetWidth(), 0));
  intersections.push_back(ofPoint(ofGetWidth(), ofGetHeight()));

  // Store all rectangles, whether they will be filled with white or color
  vector<ofPath> allRectangles;

  // Loop through intersection points and create all possible rectangles
  for (int i = 0; i < intersections.size(); i++) {
    ofPoint upperLeft = intersections[i];
    ofPoint upperRight;
    ofPoint lowerRight;
    ofPoint lowerLeft;

    // 1: Find the intersection point to the right of this point. Only check
    // points with the same y-value and with greater x-value. Find the smallest
    // larger x-value.
    int x = INT_MAX;
    for (int j = 0; j < intersections.size(); j++) {
      if (i == j)
        continue;
      ofPoint point = intersections[j];
      if (upperLeft.y == point.y && upperLeft.x < point.x) {
        if (point.x < x) {
          x = point.x;
        }
      }
    }
    upperRight.x = x;
    upperRight.y = upperLeft.y;

    // 2: Find the lower right intersection point. Only check points with the
    // same x-value and greater y-value than the upper right point. Find the
    // smallest larger y-value.
    int y = INT_MAX;
    for (int j = 0; j < intersections.size(); j++) {
      if (i == j)
        continue;
      ofPoint point = intersections[j];
      if (upperRight.x == point.x && upperRight.y < point.y) {
        if (point.y < y) {
          y = point.y;
        }
      }
    }
    lowerRight.x = upperRight.x;
    lowerRight.y = y;

    // 3: Find/create the lower left intersection points.
    lowerLeft.x = upperLeft.x;
    lowerLeft.y = lowerRight.y;

    // 4: Create the rectangle
    vector<ofColor> whites{ofColor::white, ofColor::white, ofColor::white,
                           ofColor::white, ofColor::white, ofColor::white,
                           ofColor::white, ofColor::white, ofColor::white};
    vector<ofColor> colors{ofColor::red, ofColor::blue, ofColor::yellow};
//    vector<ofColor> colors{ofColor::cyan, ofColor::magenta, ofColor::yellow};
    colors.insert(colors.end(), whites.begin(), whites.end());
    ofColor color = colors[ofRandom(colors.size())];
    ofPath rectangle =
        createRectangle(upperLeft, upperRight, lowerRight, lowerLeft, color);
    allRectangles.push_back(rectangle);
  }

  return allRectangles;
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
  // Draw rectangles
  for (int i = 0; i < rectangles.size(); i++) {
    ofPath rectangle = rectangles[i];
    rectangle.draw();
  }

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
