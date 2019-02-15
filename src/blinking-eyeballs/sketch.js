import * as Disc from './disc';
import * as Util from '../util';

const DISCS = [];
const N = 100;

//
// All setup functions here
//

// Sort discs by distance to the upper left corner. Remember that we will have translated to center.
const compareDiscs = (a, b, point) => {
  const distA = Util.distance(a.x, a.y, point.x, point.y);
  const distB = Util.distance(b.x, b.y, point.x, point.y);

  if (distA < distB) return 1;
  if (distA > distB) return -1;
  return 0;
};

export const setup = (options) => {
  const { p5, width, height } = options;

  // Create discs
  for (let i = 0; i < N; i++) {
    let x;
    let y;
    if (i < (1 * N) / 4) {
      x = -width / 2;
      y = -height / 2;
    } else if (i < (2 * N) / 4) {
      x = width / 2;
      y = -height / 2;
    } else if (i < (3 * N) / 4) {
      x = width / 2;
      y = height / 2;
    } else {
      x = -width / 2;
      y = height / 2;
    }

    const disc = Disc.create(p5, x, y);

    // Check that there is a disc, because we can get null
    if (disc) {
      DISCS.push(disc);
    }
  }

  // Sort discs. This is because we want a specific drawing order.
  const point = { x: -width / 2, y: -height / 2 };
  DISCS.sort((a, b) => compareDiscs(a, b, point));
};

//
// All drawing functions below here
//

export const draw = (options) => {
  const { p5, width, height } = options;

  // Set background color
  p5.background(255);

  // Translate to center
  p5.translate(width / 2, height / 2);

  // Draw discs
  for (let i = 0; i < DISCS.length; i++) {
    const disc = DISCS[i];
    Disc.draw(p5, disc);
  }
};
