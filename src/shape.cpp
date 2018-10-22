//
//  shape.cpp
//  linesShapesAndFields
//
//  Created by Ben Wiz on 10/22/18.
//

#include "shape.h"

Shape::Shape() {}

void Shape::setup(string type) {
  ofSetRectMode(OF_RECTMODE_CENTER);
  this->type = type; // rectangle, circle, triangle, point

  // Set fill ratio
  bool isFilled = ofRandom(-1, 1) < 0;
  if (isFilled) {
    fillRatio = ofRandom(0.2, 0.9);
  }

  // Select center. Constrained to inner 80%.
  center.x = ofRandom(0.1 * ofGetWidth(), 0.9 * ofGetWidth());
  center.y = ofRandom(0.1 * ofGetHeight(), 0.9 * ofGetHeight());

  // Set initial velocity and direction angle
  velocity = ofRandom(-1, 1) * 1.5;
  direction = ofRandom(360);

  // Create shape
  if (type == "rectangle") {
    float w = ofRandom(0.05 * ofGetWidth(), 0.1 * ofGetWidth());
    float h = ofRandom(0.05 * ofGetHeight(), 0.1 * ofGetHeight());
    rect.set(center.x, center.y, w, h);

  } else if (type == "circle") {
    circleRadius = ofRandom(0.025 * ofGetWidth(), 0.05 * ofGetWidth());

  } else if (type == "point") {
    // Do nothing

  } else if (type == "triangle") {
    float radius = ofRandom(0.01 * ofGetWidth(), 0.05 * ofGetWidth());

    // Create the 3 corners
    float radians = ofDegToRad(0);
    float x1 = center.x + cos(radians) * radius;
    float y1 = center.y + sin(radians) * radius;

    radians = ofDegToRad(120);
    float x2 = center.x + cos(radians) * radius;
    float y2 = center.y + sin(radians) * radius;

    radians = ofDegToRad(240);
    float x3 = center.x + cos(radians) * radius;
    float y3 = center.y + sin(radians) * radius;

    triangle.curveTo(x1, y1);
    triangle.curveTo(x1, y1);
    triangle.curveTo(x2, y2);
    triangle.curveTo(x3, y3);
    triangle.curveTo(x1, y1);
    triangle.curveTo(x1, y1);
    triangle.close();

    triangle.setFilled(true);
    triangle.setColor(ofColor::black);
  }
}

void Shape::update() {
  // TODO (later): Change the size and rotation of the same. And, in the case of the triangle, the corners.

  // Move the center around
  center.x += velocity * cos(ofDegToRad(direction));
  center.y += velocity * sin(ofDegToRad(direction));

  // Update direction if touching edge of window
//  if (center.x <= 0 && 90 < direction && direction < 270) {
//    direction = 180 - direction;
//  }
  if (center.x <= 0 || ofGetWidth() <= center.x) {
    direction = 180 - direction;
  } else if (center.y <= 0 || ofGetHeight() <= center.y) {
    direction = 0 - direction;
  }

}

void Shape::draw() {
  ofSetColor(ofColor::black);

  if (type == "rectangle") {
    // ofDrawRectangle(rect);
    ofDrawRectRounded(rect, 5);

    if (fillRatio > 0) {
      ofSetColor(ofColor::white);
      float x = rect.getLeft();
      float y = rect.getTop();
      float w = fillRatio * rect.getWidth();
      float h = fillRatio * rect.getHeight();
      ofRectangle r(x, y, w, h);
      // ofDrawRectangle(r);
      ofDrawRectRounded(r, 5);
    }

  } else if (type == "circle") {
    ofDrawCircle(center, circleRadius);
    if (fillRatio > 0) {
      ofSetColor(ofColor::white);
      ofDrawCircle(center, fillRatio * circleRadius);
    }

  } else if (type == "point") {
    // Draw nothing for point

  } else if (type == "triangle") {
    triangle.draw();
  }
}

ofPoint Shape::getCenter() {
  return center;
}
