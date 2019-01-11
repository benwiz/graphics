import CanvasSketch from 'canvas-sketch';
import * as Sketch from './sketch';

const settings = {
  // Make the loop animated
  animate: true,
  // Get a WebGL canvas rather than 2D
  context: 'webgl',
  // Turn on MSAA
  attributes: { antialias: true },
};

const sketch = (options) => {
  const components = Sketch.setup(options);
  const {
    renderer, camera, scene, controls, light, mesh,
  } = components;

  // draw each frame
  return {
    // Handle resize events here
    resize: ({ pixelRatio, viewportWidth, viewportHeight }) => {
      Sketch.resize(components, { pixelRatio, viewportWidth, viewportHeight });
    },
    // Update & render your scene here
    render({ time }) {
      Sketch.render(components, { time });
    },
    // Dispose of events & renderer for cleaner hot-reloading
    unload() {
      Sketch.unload(components);
    },
  };
};

CanvasSketch(sketch, settings);
