//
//  snakes.cpp
//  snakes
//
//  Created by Ben Wiz on 10/10/18.
//

#include "snakes.h"

Snakes::Snakes() {}

void Snakes::setup(int n) {
  
}

void Snakes::update() {

}

void Snakes::draw() {
  ofPushMatrix();
  ofTranslate(0.1 * ofGetWidth(), 0.1 * ofGetHeight());

  // Draw background for testing
  ofPath background;
  background.rectangle(0, 0, 0.8 * ofGetWidth(), 0.8 * ofGetHeight());
  background.setFillColor(ofColor::mintCream);
  background.draw();

  ofPopMatrix();
}
