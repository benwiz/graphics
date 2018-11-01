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
  speed = ofRandom(2);
  angle = ofRandom(360);
}

void Site::update() {
  x += speed * cos(ofDegToRad(angle));
  y += speed * sin(ofDegToRad(angle));
}

void Site::draw() {
  ofDrawCircle(x, y, 3);
}
