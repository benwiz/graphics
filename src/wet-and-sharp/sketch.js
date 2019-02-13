const GOLDEN_RATIO = 1 / 1.61803398875;

//
// All setup functions here
//

export const setup = (options) => {};

//
// All drawing functions below here
//

const drawing1 = (p5) => {
  // Draw the bottom (golden) half of the canvas black
  p5.fill(0);
  p5.rect(0, p5.height * GOLDEN_RATIO, p5.width, p5.height * (1 - GOLDEN_RATIO));
};

export const draw = (options) => {
  const { p5 } = options;

  drawing1(p5);
};
