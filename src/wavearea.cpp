//
//  wavearea.cpp
//  linesShapesAndFields
//
//  Created by Ben Wiz on 10/22/18.
//

// NOTE: Should probably be named wavefield

#include "wavearea.h"

WaveArea::WaveArea() {}

vector<ofPolyline> WaveArea::createLines(int n, float x, float y, float w, float gap, int frame) {
  vector<ofPolyline> lines;

  for (int i = 0; i < n; i++) {
    ofPolyline line;
    line.curveTo(x, y);
    line.curveTo(x, y); // double first

    float xx, yy;
    for (int j = 0; j < w; j++) {
      xx = x + j;
      yy = y + sin(j / PI + frame);
      line.curveTo(xx, yy);
    }
    line.curveTo(xx, yy); // double last

    lines.push_back(line);

    y += gap;
  }

  return lines;
}

void WaveArea::setup(int n) {
  x = 100;
  y = 100;
  w = 100;
  gap = 15;
  float frame = ofMap(ofGetFrameNum() % 100, 0, 99, 0, 1);
  lines = createLines(n, x, y, w, gap, frame);
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

