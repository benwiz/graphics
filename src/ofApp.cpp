#define JC_VORONOI_IMPLEMENTATION

#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::createFaces() {
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
    ofPolyline face;
    while (graph_edge) {
      // Collect edges into aggregate edges vector
      ofPoint p1(graph_edge->pos[0].x, graph_edge->pos[0].y);
      ofPoint p2(graph_edge->pos[1].x, graph_edge->pos[1].y);
      vector<ofPoint> edge{p1, p2};
      edges.push_back(edge);

      // Polygon polyline face stuff
      face.addVertex(p1.x, p1.x);
      cout << p1.x << "\t" << p1.y << endl;

      // Iterate
      graph_edge = graph_edge->next;
    }
    // Close shape
    face.close();
    faces.push_back(face);
  }

  // Free diagram
  jcv_diagram_free(&diagram);
}

//--------------------------------------------------------------
void ofApp::setup() {
  // Load image
  img.load("marg.jpg");

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

  // Create initial points
  for (int i = 0; i < NPOINT; i++) {
    points[i].x = ofRandom(ofGetWidth());
    points[i].y = ofRandom(ofGetHeight());
  }
}

//--------------------------------------------------------------
void ofApp::update() {
  // TODO: Updates points
  createFaces();
}

//--------------------------------------------------------------
void ofApp::draw() {
  img.draw(0, 0);

  ofSetColor(ofColor::lightBlue);
    // Draw edges
    for (vector<ofPoint> &edge : edges) {
      ofDrawLine(edge[0], edge[1]);
    }

  ofSetColor(ofColor::white);
  // Draw faces
  for (ofPolyline &face : faces) {
    face.draw();
  }
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
