//
//  snake.cpp
//  snakes
//
//  Created by Ben Wiz on 10/10/18.
//

#include "snake.h"

Snake::Snake() {}

void Snake::setup(int x, int y, int maxWidth, int maxHeight) {
  // Set up path
  path.moveTo(x, y);
  path.lineTo(x + maxWidth * 0.9, y + maxHeight * 0.9);
  path.setStrokeWidth(1);
  path.setStrokeColor(ofColor::black);

  // Set up dot
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
  dotPercent += dotDirection * 0.01;
  dot = path.getOutline()[0].getPointAtPercent(dotPercent);

  if (dotPercent <= 0) {
    dotDirection = 1;
  } else if (dotPercent >= 1) {
    dotDirection = -1;
  }
}

void Snake::draw() {
  // Draw path
  path.draw();

  // Draw dot
  ofFill();
  ofSetColor(ofColor::black);
  ofDrawCircle(dot, 2);
}
