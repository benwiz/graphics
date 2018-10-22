//
//  Shapess.cpp
//  linesShapessAndFields
//
//  Created by Ben Wiz on 10/22/18.
//

#include "shapes.h"

Shapes::Shapes() {}

void Shapes::setup(int n) {
  for (int i = 0; i < n; i++) {
    string type = "circle";
    if (ofRandom(-1, 1) < 0) {
      type = "point";
    }

    Shape shape;
    shape.setup(type);
    shapes.push_back(shape);
  }
}

void Shapes::update() {
  for (Shape &shape : shapes) {
    shape.update();
  }
}

void Shapes::draw() {
  for (Shape &shape : shapes) {
    shape.draw();
  }
}

void Shapes::reset() {
  shapes.clear();
}

vector<Shape> Shapes::getShapes() {
  return shapes;
}
