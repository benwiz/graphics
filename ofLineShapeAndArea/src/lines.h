//
//  lines.hpp
//  linesShapesAndFields
//
//  Created by Ben Wiz on 10/22/18.
//

#pragma once

#include "ofMain.h"
#include "shape.h"

class Lines {
public:
  Lines();

  void setup(vector<Shape> shapes);
  void update(vector<Shape> shapes);
  void draw();
  void reset();

private:
  vector<ofPolyline> createLines(vector<Shape> shapes);

  vector<ofPolyline> lines;
};
