//
//  snakes.cpp
//  snakes
//
//  Created by Ben Wiz on 10/10/18.
//

#include "snakes.h"

Snakes::Snakes() {}

void Snakes::setup(int n) {
  int width = 0.8 * ofGetWidth();
  int height = 0.8 * ofGetHeight();
  // Create each snake
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      int x = i * width;
      int y = j * height;
      Snake snake;
      snake.setup();
      snakes.push_back(snake);
    }
  }
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

  for (Snake &snake : snakes) {
    snake.draw();
  }

  ofPopMatrix();
}
