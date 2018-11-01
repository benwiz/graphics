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

void Site::update() {}

void Site::draw() {
  ofDrawCircle(x, y, 5);
}
