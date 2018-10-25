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

private:
  // The background image we are manipulating
  ofImage img;

  // The stage in the drawing process
  int stage;

  // The polyline used to indicate where scraping begins
  ofPolyline polyline;

  // The distance between each point along the polyline to use for scraping
  float step;

  // The angle to draw the scrape
  float scrapeAngle;
};
