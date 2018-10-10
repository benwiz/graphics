//
//  snake.hpp
//  snakes
//
//  Created by Ben Wiz on 10/10/18.
//

#pragma once

#include "ofMain.h"

class Snake {
public:
  Snake();

  void setup(int x, int y, int maxWidth, int maxHeight);
  void update();
  void draw();

  ofPath path;
  ofPoint dot;
  float dotPercent;
  int dotDirection;
};


