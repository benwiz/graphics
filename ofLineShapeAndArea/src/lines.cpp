//
//  lines.cpp
//  linesLinesAndFields
//
//  Created by Ben Wiz on 10/22/18.
//

#include "lines.h"

Lines::Lines() {}

vector<ofPolyline> Lines::createLines(vector<Shape> shapes) {
  vector<ofPolyline> lines;

  for (Shape &shape : shapes) {
    for (Shape &destShape : shapes) {
      // TODO: In order to re-introduce drawing only a subset, it is necessary to figure out how to always draw the same set of line segments.
      // 30% chance to draw
      float drawChance = 1.0;
      if (ofRandom(1.0) > drawChance) {
        continue;
      }

      // Create line
      ofPolyline line;
      line.lineTo(shape.getCenter());
      line.lineTo(destShape.getCenter());
      lines.push_back(line);
    }
  }

  return lines;
}

void Lines::setup(vector<Shape> shapes) {
  lines = createLines(shapes);
}

void Lines::update(vector<Shape> shapes) {
  lines = createLines(shapes);
}

void Lines::draw() {
  ofSetColor(ofColor::black);
  for (ofPolyline &line : lines) {
    line.draw();
  }
}

void Lines::reset() { lines.clear(); }
