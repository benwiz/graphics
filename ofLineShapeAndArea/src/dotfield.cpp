//
//  dotfield.cpp
//  linesShapesAndFields
//
//  Created by Ben Wiz on 10/30/18.
//

#include "dotfield.h"

DotField::DotField() {}

vector<ofPoint> DotField::createDots(int cols, int rows, float x, float y,
                                     float w, int frame) {
  vector<ofPoint> dots;

  float startX = x;
  float startY = y;
  float step = w / cols;
  for (int i = 0; i < cols; i++) {
    for (int j = 0; j < rows; j++) {
      ofPoint dot(x, y);
      dots.push_back(dot);
      y += step;
    }
    y = startY;
    x += step;
    if (x > startX + w) {
      x = startX;
    }
  }

  return dots;
}

vector<ofPoint> DotField::updateDots(vector<ofPoint> dots, int frame) {
  if (dots[0].x > ofGetWidth()) {
    xChange = -1;
  } else if (dots[0].x < 0) {
    xChange = 1;
  }
  if (dots[0].y > ofGetHeight()) {
    yChange = -1;
  } else if (dots[0].y < 0) {
    yChange = 1;
  }

  for (ofPoint &dot : dots) {
    dot.x += xChange;
    dot.y += yChange;
  }
  return dots;
}

void DotField::setup(int cols, int rows) {
  cols = cols;
  rows = rows;
  x = 450;
  y = 450;
  w = 150;
  dots = createDots(cols, rows, x, y, w, 0);

  rotation = 0;
}

void DotField::update() {
  float frame = ofGetFrameNum() / PI;
  dots = updateDots(dots, frame);
}

void DotField::draw() {
  ofPushMatrix();
  ofRotateDeg(rotation, dots[0].x, dots[1].y, 0);
  rotation += 1;

  ofFill();
  ofSetColor(ofColor::black);
  for (ofPoint &dot : dots) {
    ofDrawCircle(dot, 1);
  }

  ofPopMatrix();
}

void DotField::reset() { dots.clear(); }
