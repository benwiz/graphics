import Noise from 'noisejs-ilmiont';
import * as Util from '../util';

// Seed the noise
Noise.seed(Math.random());

export const create = (p5) => {
  const disc = {
    x: p5.randomGaussian(0, 500),
    y: p5.randomGaussian(0, 500),
  };

  // Determine a radius based on distance to center
  const dist = Util.distance(disc.x, disc.y, 0, 0);
  const maxDist = p5.width / 2;
  const minRadius = 20;
  const maxRadius = 100;
  const radius = Util.scale(dist, maxDist, 0, minRadius, maxRadius);
  disc.radius = radius;

  return disc;
};

export const setupDrawing = (p5) => {
  p5.fill(200);
  p5.stroke(0);
  p5.strokeWeight(1);
};

export const draw = (p5, disc) => {
  const perlinValue = Noise.simplex2(disc.x, disc.y);
  const color = Math.abs(perlinValue) * 256;
  p5.fill(color);

  p5.ellipse(disc.x, disc.y, disc.radius);
};
