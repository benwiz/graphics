//
//  site.cpp
//  fragmentVoronoi
//
//  Created by Ben Wiz on 11/1/18.
//

#include "site.h"

Site::Site(float x, float y) {
  this->x = x;
  this->y = y;
  speed = ofRandom(1);
  angle = ofRandom(360);
}

void Site::update() {
  x += speed * cos(ofDegToRad(angle));
  y += speed * sin(ofDegToRad(angle));

  // Ensure that sites cannot be behind border
  if (x < 0) x = 0;
  else if (x > ofGetWidth()) x = ofGetWidth();
  if (y < 0) y = 0;
  else if (y > ofGetHeight()) y = ofGetHeight();

  // Reflect off walls
  if (x <= 0 || ofGetWidth() <= x) {
    angle = 180 - angle;
  } else if (y <= 0 || ofGetHeight() <= y) {
    angle = 0 - angle;
  }
}

void Site::draw() {
  ofDrawCircle(x, y, 3);
}
