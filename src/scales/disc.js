import FastSimplexNoise from 'fast-simplex-noise';
import * as Util from '../util';

const noiseGen = new FastSimplexNoise({
  frequency: 0.01,
  min: 0,
  max: 255,
  octaves: 8,
});

export const create = (p5, x, y) => {
  const disc = {
    x: p5.randomGaussian(x, 150),
    y: p5.randomGaussian(y, 150),
  };

  // Determine a radius based on distance to center
  const dist = Util.distance(disc.x, disc.y, 0, 0);
  const maxDist = p5.width / 2;
  const minRadius = 20;
  const maxRadius = 100;
  const radius = Util.scale(dist, maxDist, 0, minRadius, maxRadius);
  disc.radius = radius;

  // If the disc lies outside a padding-like border, return a null disc
  const percent = 0.4;
  const xConstraint = percent * p5.width;
  const yConstraint = percent * p5.height;
  if (disc.x < -xConstraint || disc.x > xConstraint) return null;
  if (disc.y < -yConstraint || disc.y > yConstraint) return null;

  return disc;
};

const grayscale = (p5, disc) => {
  p5.colorMode(p5.RGB);
  p5.fill(200);
  p5.stroke(0);
  p5.strokeWeight(1);

  const color = noiseGen.scaled([disc.x, disc.y]);
  p5.fill(color);
  p5.ellipse(disc.x, disc.y, disc.radius);
};

const rainbow = (p5, disc) => {
  p5.colorMode(p5.HSB);
  p5.fill(200);
  p5.stroke(0);
  p5.strokeWeight(1);

  const hue = noiseGen.scaled([disc.x, disc.y]);
  p5.fill(hue * 2, 100, 100);
  p5.ellipse(disc.x, disc.y, disc.radius);
};

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

const archeryTarget = (p5, disc) => {
  // NOTE: I looked into drawing the internal black lines... it doesn't come out that well.
  // The remnant of that attempt is why n=10 instead of n=5.

  p5.colorMode(p5.RGB);
  p5.stroke(0);

  const n = 10;
  for (let i = n; i > 0; i--) {
    p5.strokeWeight(0);

    switch (i) {
      case 1:
      case 2:
        p5.fill(255, 255, 0);
        break;
      case 3:
      case 4:
        p5.fill(255, 0, 0);
        break;
      case 5:
      case 6:
        p5.fill(0, 0, 255);
        break;
      case 7:
      case 8:
        p5.fill(0, 0, 0);
        break;
      case 9:
        p5.fill(255, 255, 255);
        break;
      case 10:
        p5.fill(255, 255, 255);
        p5.strokeWeight(1);
        break;
      default:
        break;
    }
    p5.ellipse(disc.x, disc.y, disc.radius * (i / n));
  }
};

const evilEye = (p5, disc) => {
  p5.colorMode(p5.RGB);
  p5.strokeWeight(0);

  // TODO: Look into adding some wavering noise to replicate a more handpainted result

  // Using n=5 results in too much of the dark blue covering everything
  const n = 4;
  for (let i = n; i > 0; i--) {
    switch (i) {
      case 1:
        p5.fill(0);
        break;
      case 2:
        p5.fill(175, 215, 245);
        break;
      case 3:
        p5.fill(255);
        break;
      case 4:
      case 5:
        p5.fill(20, 50, 180);
        break;
      default:
        break;
    }
    p5.ellipse(disc.x, disc.y, disc.radius * (i / n));
  }
};

const catsEye = (p5, disc) => {
  // TODO: Figure out how to do a gradient on each eye... maybe the border should be an exrema of
  // the gradient

  p5.colorMode(p5.RGB);
  p5.strokeWeight(1);
  p5.stroke(0);

  // Draw the iris
  const irisColors = [
    // Blue
    { r: 50, g: 185, b: 250 },
    // Gold
    { r: 210, g: 170, b: 10 },
    // Green
    { r: 150, g: 210, b: 10 },
  ];
  const irisColor = Util.randomElement(irisColors);
  p5.fill(irisColor.r, irisColor.g, irisColor.b);
  p5.ellipse(disc.x, disc.y, disc.radius);

  // Draw the pupil
  p5.fill(0);
  const pupilHeight = 0.85 * disc.radius;
  let pupilWidth = disc.radius * p5.randomGaussian(0.15, 0.5);
  pupilWidth = Math.max(0.1 * disc.radius, pupilWidth);
  pupilWidth = Math.min(0.8 * disc.radius, pupilWidth);
  p5.ellipse(disc.x, disc.y, pupilWidth, pupilHeight);
};

export const draw = (p5, disc) => {
  // Use a predefined algorithm to define the circle's contents

  // grayscale(p5, disc);
  // rainbow(p5, disc);
  // concentricCirclesGrayscale(p5, disc);
  // archeryTarget(p5, disc);
  // evilEye(p5, disc);
  catsEye(p5, disc);
};
