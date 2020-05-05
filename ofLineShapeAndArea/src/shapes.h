//
//  shapes.hpp
//  linesShapesAndFields
//
//  Created by Ben Wiz on 10/22/18.
//

#pragma once

#include "ofMain.h"
#include "shape.h"

class Shapes {
public:
  Shapes();

  void setup(int n);
  void update();
  void draw();
  void reset();
  vector<Shape> getShapes();

private:
  vector<Shape> shapes;
};
