import CanvasSketch from 'canvas-sketch';
import P5 from 'p5';
import * as Sketch from './sketch';

const preload = (_p5) => {
  // You can use p5.loadImage() here, etc...
};

// Set pixelsPerInch so it can be used for dimensions calculations... I don't like the effects
// of using sketch-canvas `units: 'in'`.
const pixelsPerInch = 72;
const widthInches = 8.5;
const heightInches = 11;

const settings = {
  // Pass the p5 instance, and preload function if necessary
  p5: { p5: P5, preload },
  // Turn on a render loop
  animate: false,
  // Configure size
  dimensions: [widthInches * pixelsPerInch, heightInches * pixelsPerInch],
  pixelsPerInch,
};

const sketch = (options) => {
  Sketch.setup(options);
  return Sketch.draw;
};

CanvasSketch(sketch, settings);
