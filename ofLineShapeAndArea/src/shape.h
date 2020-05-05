//
//  shape.hpp
//  linesShapesAndFields
//
//  Created by Ben Wiz on 10/22/18.
//

#pragma once

#include "ofMain.h"

class Shape {
public:
  Shape();

  void setup(string type);
  void update();
  void draw();
  ofPoint getCenter();

private:
  string type;
  float fillRatio;
  int fillRatioChange; // -1 = waning, 0 = static, 1 = waxing
  float fillRatioStep;

  ofPoint center;
  float velocity;
  float direction; // degrees

  ofRectangle rect;
  int circleRadius;
  ofPath triangle;
};

