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

  void setup();
  void update();
  void draw();

  ofPath path;
  ofPoint dot;
};


