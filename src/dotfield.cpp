//
//  dotfield.cpp
//  linesShapesAndFields
//
//  Created by Ben Wiz on 10/30/18.
//

#include "dotfield.h"

DotField::DotField() {}

vector<ofPoint> DotField::createDots(int cols, int rows, float x, float y, float w, int frame) {
  vector<ofPoint> dots;

  float step = w / cols;
  for (int i = 0; i < cols; i++) {
    for (int j = 0; i < rows; j++) {
      // TODO: Fix this to include i, j
      ofPoint dot(x, y);
      dots.push_back(dot);
//      x += step;
//      y += step;
    }
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
}

void DotField::update() {
  float frame = ofGetFrameNum() / PI; // I'd like to understand how to slow down the oscillations
  dots = createDots(cols, rows, x, y, w, frame);
}

void DotField::draw() {
  ofPushMatrix();
  ofRotateDeg(10, x, y, 0);

  ofFill();
  ofSetColor(ofColor::black);
  for (ofPoint &dot : dots) {
    ofDrawCircle(dot, 1);
  }

  ofPopMatrix();
}

void DotField::reset() { dots.clear(); }
