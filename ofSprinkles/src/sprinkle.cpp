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
  this->rotation = ofRandom(360);
}

void Sprinkle::update() {}

void Sprinkle::draw() {
  ofRectMode(OF_RECTMODE_CENTER);
  ofSetColor(color);

  // We maybe rotate, so push and pop matrix just incase
  ofPushMatrix();
  ofTranslate(x, y);

  // Rotation
  ofRotateDeg(rotation);

  // Draw rectangle
  ofDrawRectangle(0, 0, w, h);

  // Draw end caps
  ofDrawCircle(0, h / 2, h / 2);
  ofDrawCircle(w, h / 2, h / 2);

  ofPopMatrix();
}

