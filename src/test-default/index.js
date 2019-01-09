const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [2048, 2048],
  bleed: 1000,
};

const sketch = () => ({ context, width, height }) => {
  context.fillStyle = 'blue';
  context.fillRect(0, 0, width, height);
};

canvasSketch(sketch, settings);
