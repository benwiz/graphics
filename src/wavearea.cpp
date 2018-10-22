//
//  wavearea.cpp
//  linesShapesAndFields
//
//  Created by Ben Wiz on 10/22/18.
//

#include "wavearea.h"

WaveArea::WaveArea() {}

void WaveArea::setup(int n) {
  float x = 100;
  float y = 100;
  float w = 100;
  float gap = 15;
  for (int i = 0; i < n; i++) {
    ofPolyline line;
    line.curveTo(x, y);
    line.curveTo(x, y); // double first

    for (int j = 0; j < w; j++) {
      line.curveTo(x + j, y + sin(j));
      cout << sin(j) << endl;
    }
    line.curveTo(x + w - 1, y + ofNoise(w - 1)); // double last

    lines.push_back(line);

    y += gap;
  }
}

void WaveArea::update() {
  for (ofPolyline &line : lines) {

  }
}

void WaveArea::draw() {
  ofPushMatrix();
  ofRotateDeg(-20, 100, 150, 0);

  ofSetColor(ofColor::black);
  for (ofPolyline &line : lines) {
    line.draw();
  }

  ofPopMatrix();
}

void WaveArea::reset() { lines.clear(); }

