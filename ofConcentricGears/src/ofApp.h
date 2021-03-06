#pragma once

#include "ofMain.h"

class ofApp : public ofBaseApp {

public:
  void setup();
  void update();
  void draw();

  void keyPressed(int key);
  void keyReleased(int key);
  void mouseMoved(int x, int y);
  void mouseDragged(int x, int y, int button);
  void mousePressed(int x, int y, int button);
  void mouseReleased(int x, int y, int button);
  void mouseEntered(int x, int y);
  void mouseExited(int x, int y);
  void windowResized(int w, int h);
  void dragEvent(ofDragInfo dragInfo);
  void gotMessage(ofMessage msg);

  vector<ofColor> createColorPalette(int numColors);
  vector<ofColor> createColorPaletteDynamically(int numColors);
  vector<ofColor> createColorPaletteManually();
  ofPath createArc(int radius, int thickness, int arcLength, int start, ofColor color);
  ofPath createBorderArc(int radius, int thickness, int arcLength, int start, ofColor color);
  vector<ofPath> createArcsForCircle(int radius, int thickness, ofColor color);

  vector<ofColor> colors;
  bool selectRandomColors;
  int numColors;
  vector<ofPath> arcs;
  vector<ofPath> borderArcs;
  int numCircles;
  int circlesCreated;
};
