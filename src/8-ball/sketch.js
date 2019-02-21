import * as Rough from 'roughjs/dist/rough.umd';
import * as Util from '../util';

let ROUGH_CANVAS;

//
// All setup functions here
//

export const setup = (_options) => {
  // Set up rough.js canvas
  ROUGH_CANVAS = Rough.canvas(document.querySelector('canvas'));
};

//
// All drawing functions below here
//

const drawBackground = (canvas) => {
  const x = 0;
  const y = 0;
  const w = canvas.canvas.width;
  const h = canvas.canvas.height;
  const options = {
    roughness: 1.5,
    strokeWidth: 2.0,
    fill: 'green',
    fillStyle: 'hachure',
    fillWeight: 3,
    hachureGap: 1.3,
  };
  canvas.rectangle(x, y, w, h, options);
};

export const draw = (options) => {
  const { p5 } = options;

  // Clear screen
  p5.background(255);

  // Draw background
  drawBackground(ROUGH_CANVAS);
};
