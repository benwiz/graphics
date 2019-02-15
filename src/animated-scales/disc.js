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

  // Determine a diameter based on distance to center
  const dist = Util.distance(disc.x, disc.y, 0, 0);
  const maxDist = p5.width / 2;
  const minDiameter = 20;
  const maxDiameter = 100;
  const diameter = Util.scale(dist, maxDist, 0, minDiameter, maxDiameter);
  disc.diameter = diameter;

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
    p5.ellipse(disc.x, disc.y, disc.diameter * (i / n));
  }
};

// eslint-disable-next-line no-unused-vars
const evilEye = (p5, disc) => {
  p5.push();

  // Drawing configs
  p5.colorMode(p5.RGB);
  p5.strokeWeight(0);

  // Translate to center of disc
  p5.translate(disc.x, disc.y);

  // Rotate based on frame count
  p5.angleMode(p5.DEGREES);
  const frameCount = p5.frameCount % 360;
  p5.rotate(frameCount);

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
    const diameter = disc.diameter * (i / n);
    p5.ellipse(0, 0, diameter);

    // If pupil draw a spiral (for now, a line)
    if (i === 1) {
      p5.stroke(255);
      p5.strokeWeight(1);

      let r = 0;
      const rotations = 2;
      const rStep = (0.5 * diameter) / (360 * rotations);
      for (let a = 0; a < 360 * rotations; a++) {
        const x = r * p5.cos(a);
        const y = r * p5.sin(a);
        p5.point(x, y);

        r += rStep;
      }
    }
  }

  p5.pop();
};

export const draw = (p5, disc) => {
  // concentricCirclesGrayscale(p5, disc);
  evilEye(p5, disc);
};
