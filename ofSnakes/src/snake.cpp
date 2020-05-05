//
//  snake.cpp
//  snakes
//
//  Created by Ben Wiz on 10/10/18.
//

#include "snake.h"

Snake::Snake() {}

void Snake::setup(int x, int y, int maxWidth, int maxHeight) {
  // Reduce max dimensions
  float ratio = 0.8;
  maxWidth *= ratio;
  maxHeight *= ratio;

  // Set up path
  int numSegments = 4;
  path.setFilled(false);
  path.setStrokeWidth(1);
  path.setStrokeColor(ofColor::black);
  path.moveTo(x, y);
  for (int i = 0; i < numSegments; i++) {
    if (ofRandom(-1, 1) < 0) {
      if (ofRandom(-1, 1) < 0) {
        x += maxWidth;
      } else {
        x -= maxWidth;
      }
    } else {
      if (ofRandom(-1, 1) < 0) {
        y += maxHeight;
      } else {
        y -= maxHeight;
      }
    }
    path.lineTo(x, y);
  }

  // Set up dot
  dotSpeed = ofRandom(0.005, 0.02);
  dotDirection = ofRandom(-1, 1);
  if (dotDirection < 0) {
    dotDirection = -1;
  } else {
    dotDirection = 1;
  }
  dotPercent = ofRandom(1.0);
  dot = path.getOutline()[0].getPointAtPercent(dotPercent);
}

void Snake::update() {
  // Move point along path
  dotPercent += dotDirection * dotSpeed;
  dot = path.getOutline()[0].getPointAtPercent(dotPercent);

  if (dotPercent <= 0) {
    dotDirection = 1;
  } else if (dotPercent >= 1) {
    dotDirection = -1;
  }
}

void Snake::drawPath() { path.draw(); }

void Snake::drawDot() {
  ofFill();
  ofSetColor(ofColor::black);
  ofDrawCircle(dot, 2);
}
