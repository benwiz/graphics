//
//  sprinkle.cpp
//  sprinkles
//
//  Created by Ben Wiz on 10/27/18.
//

#include "sprinkle.h"

Sprinkle::Sprinkle(float x, float y, float w, float h, ofColor color) {
  this->color = color;
  this->x = x;
  this->y = y;
  this->w = w;
  this->h = h;
  this->doRotate = ofRandom(-1, 1) < 0;
}

void Sprinkle::update() {}

void Sprinkle::draw() {
  ofRectMode(OF_RECTMODE_CENTER);
  ofSetColor(color);

  // We maybe rotate, so push and pop matrix just incase
  ofPushMatrix();
  ofTranslate(x, y);

  if (doRotate) {
    ofRotateDeg(90);
  }
  ofDrawRectangle(0, 0, w, h);

  ofPopMatrix();
}

