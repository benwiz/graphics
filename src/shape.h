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

  ofPoint center;
  float velocity;
  float direction; // degrees

  ofRectangle rect;
  int circleRadius;
  ofPath triangle;
};

