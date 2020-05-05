//
//  snakes.hpp
//  snakes
//
//  Created by Ben Wiz on 10/10/18.
//

#pragma once

#include "ofMain.h"
#include "snake.h"

class Snakes {
public:
  Snakes();

  void setup(int n);
  void update();
  void draw();
  void reset();

  vector<Snake> snakes;
};
