import CanvasSketch from 'canvas-sketch';
import P5 from 'p5';
import * as Sketch from './sketch';

const preload = (p5) => {
  // You can use p5.loadImage() here, etc...
};

const settings = {
  // Pass the p5 instance, and preload function if necessary
  p5: { p5: P5, preload },
  // Turn on a render loop
  animate: false,
  // Configure size
  dimensions: 'letter',
  pixelsPerInch: 72, // Adjusting this affects print quality, I think
};

const sketch = (options) => {
  Sketch.setup(options);
  return Sketch.draw;
};

CanvasSketch(sketch, settings);
