const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
const Sketch = require('./sketch');

const preload = (p5) => {
  // You can use p5.loadImage() here, etc...
};

const settings = {
  // Pass the p5 instance, and preload function if necessary
  p5: { p5, preload },
  // Turn on a render loop
  animate: true,
};

const sketch = () => {
  Sketch.setup();
  return Sketch.draw;
};

canvasSketch(sketch, settings);
