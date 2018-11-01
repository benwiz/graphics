#pragma once

#include "ofMain.h"
#include "site.h"

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
  void createFaces();
  ofColor getColor(ofPath face);
  ofColor getAverageColor(ofPath face);
  ofColor getRandomColor();

  ofImage img;
  vector<Site> mySites; // prepended "my" to avoid conflict with some code in
                        // createFaces()... can be cleaned up
  vector<vector<ofPoint>> edges;
  vector<ofPath> faces;

  int tmp = 0;

  // Configs
  int NPOINT = 3000;
  int strokeWidth = 1;
};

