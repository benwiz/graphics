//
//  dotfield.hpp
//  linesShapesAndFields
//
//  Created by Ben Wiz on 10/30/18.
//

#pragma once

#include "ofMain.h"

class DotField {
public:
  DotField();

  void setup(int cols, int rows);
  void update();
  void draw();
  void reset();

private:
  vector<ofPoint> createDots(int cols, int rows, float x, float y, float w, int frame);
  vector<ofPoint> updateDots(vector<ofPoint> dots, int frame);

  vector<ofPoint> dots;
  int cols;
  int rows;
  float x;
  float y;
  float w;
  float gap;
  int rotation;
  float xChange = 1;
  float yChange = 1;
};
