//
//  snakes.cpp
//  snakes
//
//  Created by Ben Wiz on 10/10/18.
//

#include "snakes.h"

Snakes::Snakes() {}

void Snakes::setup(int n) {
  float ratio = 0.9;
  int width = ratio * ofGetWidth();
  int height = ratio * ofGetHeight();

  // Create each snake
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      int x = i * width / n;
      int y = j * height / n;
      Snake snake;
      snake.setup(x, y, width / n, height / n);
      snakes.push_back(snake);
    }
  }
}

void Snakes::update() {
  for (Snake &snake : snakes) {
    snake.update();
  }
}

void Snakes::draw() {
  ofPushMatrix();
  ofTranslate(0.1 * ofGetWidth(), 0.1 * ofGetHeight());

  for (Snake &snake : snakes) {
    snake.drawPath();
  }
  for (Snake &snake : snakes) {
    snake.drawDot();
  }

  ofPopMatrix();
}

void Snakes::reset() {
  int n = sqrt(snakes.size());
  snakes.clear();
  setup(n);
}
