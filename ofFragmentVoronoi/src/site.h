//
//  site.hpp
//  fragmentVoronoi
//
//  Created by Ben Wiz on 11/1/18.
//

#pragma once

#include "ofMain.h"

class Site {
public:
  Site(float x, float y);

  void update();
  void draw();

  float x;
  float y;

private:
  float speed;
  float angle;
};

