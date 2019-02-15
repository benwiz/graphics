import * as Util from '../util';

const constrainPadding = (p5, disc, percent) => {
  const xConstraint = percent * p5.width;
  const yConstraint = percent * p5.height;

  if (disc.x < -xConstraint) return true;
  if (disc.x > xConstraint) return true;
  if (disc.y < -yConstraint) return true;
  if (disc.y > yConstraint) return true;

  return false;
};

export const create = (p5, x, y) => {
  const disc = {
    x: p5.randomGaussian(x, 150),
    y: p5.randomGaussian(y, 150),
  };

  // Constrain by selected algorithm
  const doConstrain = constrainPadding(p5, disc, 0.4);

  // Return null says don't draw this disc
  if (doConstrain) return null;

  // Determine a radius based on distance to center
  const dist = Util.distance(disc.x, disc.y, 0, 0);
  const maxDist = p5.width / 2;
  const minRadius = 20;
  const maxRadius = 100;
  const radius = Util.scale(dist, maxDist, 0, minRadius, maxRadius);
  disc.radius = radius;

  return disc;
};

// eslint-disable-next-line no-unused-vars
const concentricCirclesGrayscale = (p5, disc) => {
  p5.colorMode(p5.RGB);
  p5.strokeWeight(0);

  const n = 5;
  for (let i = n; i > 0; i--) {
    if (i % 2) {
      p5.fill(0);
    } else {
      p5.fill(200);
    }
    p5.ellipse(disc.x, disc.y, disc.radius * (i / n));
  }
};

// eslint-disable-next-line no-unused-vars
const evilEye = (p5, disc) => {
  // Drawing configs
  p5.colorMode(p5.RGB);
  p5.strokeWeight(0);

  // Translate to center of disc
  p5.translate(disc.x, disc.y);

  // Draw the evil eye disc
  const n = 4;
  for (let i = n; i > 0; i--) {
    switch (i) {
      case 1:
        // Pupil
        p5.fill(0);
        break;
      case 2:
        // Light blue iris
        p5.fill(175, 215, 245);
        break;
      case 3:
        // White
        p5.fill(255);
        break;
      case 4:
        // Outer dark blue
        p5.fill(20, 50, 180);
        break;
      default:
        break;
    }
    p5.ellipse(0, 0, disc.radius * (i / n));

    // If pupil draw a spiral (for now, a line)
    if (i === 1) {
      // p5.line()
    }
  }
};

export const draw = (p5, disc) => {
  p5.push();

  // concentricCirclesGrayscale(p5, disc);
  evilEye(p5, disc);

  p5.pop();
};
