import * as Disc from './disc';

const DISCS = [];

//
// All setup functions here
//

export const setup = (options) => {
  const { p5, width, height } = options;

  // Create discs
  const n = 50;
  for (let i = 0; i < n; i++) {
    const disc = Disc.create(p5);
    DISCS.push(disc);
  }
};

//
// All drawing functions below here
//

export const draw = (options) => {
  const { p5, width, height } = options;

  // Translate to center
  p5.translate(width / 2, height / 2);

  // Draw discs
  Disc.setupDrawing(p5);
  for (let i = 0; i < DISCS.length; i++) {
    const disc = DISCS[i];
    Disc.draw(p5, disc);
  }
};
