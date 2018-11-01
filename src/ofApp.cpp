#define JC_VORONOI_IMPLEMENTATION

#include "ofApp.h"
#include "jc_voronoi.h"

//--------------------------------------------------------------
ofColor ofApp::getAverageColor(ofPath face) {
  // Counters
  float counter = 0;
  float r = 0;
  float g = 0;
  float b = 0;
  // Get bounding box
  ofPolyline outline = face.getOutline()[0];
  ofRectangle boundingBox = outline.getBoundingBox();
  // Iterate through each point
  for (float x = boundingBox.getLeft(); x < boundingBox.getRight(); x++) {
    for (float y = boundingBox.getTop(); y < boundingBox.getBottom(); y++) {
      // Check if the point is inside the face, if so account for its RGB values
      bool isInside = outline.inside(x, y);
      if (isInside) {
        ofColor color = img.getColor(x, y);
        r += color.r;
        g += color.g;
        b += color.b;
        counter++;
      }
    }
  }

  // tmp block
  if (counter == 0) {
    ofSetColor(ofColor::white);
    ofNoFill();
    ofDrawRectangle(boundingBox);
  }

  // Calculate the average
  r /= counter;
  g /= counter;
  b /= counter;
  ofColor color(r, g, b);
  return color;
}

ofColor ofApp::getRandomColor() { return ofColor::fromHsb(tmp, 128, 128); }

ofColor ofApp::getColor(ofPath face) {
  //  return getRandomColor();
  return getAverageColor(face);
}

//--------------------------------------------------------------
void ofApp::createFaces() {
  // Create the points array
  jcv_point points[mySites.size()];
  for (int i = 0; i < mySites.size(); i++) {
    Site mySite = mySites[i];
    points[i].x = mySite.x;
    points[i].y = mySite.y;
  }

  // Init jc_voronoi
  int i;
  jcv_rect bounding_box = {{0.0f, 0.0f},
                           {float(ofGetWidth()), float(ofGetHeight())}};
  jcv_diagram diagram;
  const jcv_site *sites;
  jcv_graphedge *graph_edge;

  memset(&diagram, 0, sizeof(jcv_diagram));

  // Generate diagram
  jcv_diagram_generate(NPOINT, (const jcv_point *)points, &bounding_box,
                       &diagram);

  // Get edges and faces
  edges.clear();
  faces.clear();
  sites = jcv_diagram_get_sites(&diagram);
  for (i = 0; i < diagram.numsites; i++) {
    graph_edge = sites[i].edges;
    ofPath face;
    while (graph_edge) {
      // Collect edges into aggregate edges vector
      ofPoint p1(graph_edge->pos[0].x, graph_edge->pos[0].y);
      ofPoint p2(graph_edge->pos[1].x, graph_edge->pos[1].y);
      vector<ofPoint> edge{p1, p2};
      edges.push_back(edge);

      // Polygon ofPath face stuff
      face.lineTo(p1.x, p1.y);

      // Iterate
      graph_edge = graph_edge->next;
    }
    // Close shape
    face.close();

    // Calculate color
    ofColor color = getColor(face);
    face.setColor(color);

    // Record the face globally
    faces.push_back(face);

    tmp = faces.size(); // Used for get random color, was tmp, but maybe stays
  }

  // Free diagram
  jcv_diagram_free(&diagram);
}

//--------------------------------------------------------------
void ofApp::setup() {
  // Load image
  // img.load("marg.jpg");
  img.load("starry-night.jpg");

  // Adjust image and window to be large but within initial configs
  float width = img.getWidth();
  float height = img.getHeight();
  float maxWidth = ofGetWidth();
  float maxHeight = ofGetHeight();
  float aspectRatio = width / height;
  if (width > height) {
    width = maxWidth;
    height = width / aspectRatio;
  } else {
    height = maxHeight;
    width = height * aspectRatio;
  }
  img.resize(width, height);
  ofSetWindowShape(width, height);

  // Create initial sites
  for (int i = 0; i < NPOINT; i++) {
    float x = ofRandom(ofGetWidth());
    float y = ofRandom(ofGetHeight());
    Site mySite(x, y);
    mySites.push_back(mySite);
  }
}

//--------------------------------------------------------------
void ofApp::update() {
  for (Site &site : mySites) {
    site.update();
  }
  createFaces();
}

//--------------------------------------------------------------
void ofApp::draw() {
  ofSetColor(ofColor::white);
  img.draw(0, 0);

  // Draw faces
  for (int i = 0; i < faces.size(); i++) {
    ofPath face = faces[i];
    face.setStrokeColor(ofColor::white);
    face.setStrokeWidth(2);
    face.draw();
  }

  //  // Draw sites
  //  for (Site &site : mySites) {
  //    site.draw();
  //  }
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key) {}

//--------------------------------------------------------------
void ofApp::keyReleased(int key) {}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y) {}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button) {}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button) {}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button) {}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y) {}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y) {}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h) {}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg) {}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo) {}
