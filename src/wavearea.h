//
//  wavearea.hpp
//  linesShapesAndFields
//
//  Created by Ben Wiz on 10/22/18.
//

#pragma once

#include "ofMain.h"

class WaveArea {
public:
  WaveArea();

  void setup(int n);
  void update();
  void draw();
  void reset();

private:
  vector<ofPolyline> lines;
};

