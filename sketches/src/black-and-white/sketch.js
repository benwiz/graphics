// import * as Util from '../util';

const GOLDEN_RATIO = 1 / 1.61803398875;

//
// All setup functions here
//

export const setup = (_options) => {};

//
// All drawing functions below here
//

const peaksAndReflections = (p5) => {
  // Set background color to be white
  p5.background(255);

  // Translate down to the golden ratio
  p5.translate(0, GOLDEN_RATIO * p5.height);

  // Shut off borders
  p5.strokeWeight(0);

  // Draw the bottom (golden) half of the canvas black
  p5.fill(0);
  const rectHeight = p5.height * (1 - GOLDEN_RATIO);
  p5.rect(0, 0, p5.width, rectHeight);
};

export const draw = (options) => {
  const { p5 } = options;

  peaksAndReflections(p5);
};
