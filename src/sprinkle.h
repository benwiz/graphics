//
//  sprinkle.hpp
//  sprinkles
//
//  Created by Ben Wiz on 10/27/18.
//

#pragma once

#include "ofMain.h"

class Sprinkle {
public:
  Sprinkle(float x, float y, float w, float h, ofColor color);

  void update();
  void draw();

private:
  ofColor color;
  float x;
  float y;
  float w;
  float h;
  bool doRotate;
};

