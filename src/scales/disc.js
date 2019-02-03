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

export const draw = (p5, disc) => {
  // Use a predefined algorithm to define the circle's contents

  grayscale(p5, disc);
  // rainbow(p5, disc);
};
