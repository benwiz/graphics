import * as Util from '../util';

export const create = (p5, x, y) => {
  const disc = {
    x: p5.randomGaussian(x, 150),
    y: p5.randomGaussian(y, 150),
  };

  // If the disc lies outside a padding-like border, move it inside the border
  const percent = 0.4;
  const xConstraint = percent * p5.width;
  const yConstraint = percent * p5.height;
  if (disc.x < -xConstraint) return null;
  if (disc.x > xConstraint) return null;
  if (disc.y < -yConstraint) return null;
  if (disc.y > yConstraint) return null;

  // Determine a radius based on distance to center
  const dist = Util.distance(disc.x, disc.y, 0, 0);
  const maxDist = p5.width / 2;
  const minRadius = 20;
  const maxRadius = 100;
  const radius = Util.scale(dist, maxDist, 0, minRadius, maxRadius);
  disc.radius = radius;

  return disc;
};

const grayscale = (p5, disc) => {
  p5.colorMode(p5.RGB);
  p5.fill(200);
  p5.stroke(0);
  p5.strokeWeight(1);

  const color = 255 * p5.noise(disc.x, disc.y);
  p5.fill(color);
  p5.ellipse(disc.x, disc.y, disc.radius);
};

const rainbow = (p5, disc) => {
  p5.colorMode(p5.HSB);
  p5.fill(200);
  p5.stroke(0);
  p5.strokeWeight(1);

  const hue = 255 * p5.noise(disc.x, disc.y);
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
  p5.colorMode(p5.HSB);
  p5.strokeWeight(1);

  // Select the color for the iris
  const colors = [
    // Blue
    { h: 200, s: 100, b: 100 },
    // Gold
    { h: 50, s: 100, b: 100 },
    // Green
    { h: 80, s: 100, b: 100 },
  ];
  const color = Util.randomElement(colors);
  p5.stroke(color.h, color.s, 50);

  // The the iris using a gradient. Begin with the outside and decreate saturation inward.
  for (let i = disc.radius; i > 0; i--) {
    const saturationAdjust = Util.scale(i, 0, disc.radius, color.s, 0);
    const saturation = color.s - saturationAdjust;
    p5.fill(color.h, saturation, color.b);
    p5.ellipse(disc.x, disc.y, i);

    // Turn off border
    if (i === disc.radius) {
      p5.strokeWeight(0);
    }
  }

  // Draw the pupil
  p5.fill(0);
  const pupilHeight = 0.85 * disc.radius;
  let pupilWidth = disc.radius * p5.randomGaussian(0.15, 0.5);
  pupilWidth = Math.max(0.1 * disc.radius, pupilWidth);
  pupilWidth = Math.min(0.8 * disc.radius, pupilWidth);
  p5.ellipse(disc.x, disc.y, pupilWidth, pupilHeight);
};

const sauronsEye = (p5, disc) => {
  // This is unfished. I am not sure how to cut a hole or mask in an ellipse. I also will need to
  // use some noise for texturing for the iris. Look into the p5.createImage() function, because
  // a mask can only be used with an image.

  p5.colorMode(p5.HSB);
  p5.strokeWeight(1);

  // First draw a yellow background with gradient. Begin outside and work in decreating saturation.
  let color = { h: 50, s: 100, b: 82 };
  p5.stroke(color.h, color.s, 60);
  for (let i = disc.radius; i > 0; i--) {
    const saturationAdjust = Util.scale(i, 0, disc.radius, color.s, 20);
    const saturation = color.s - saturationAdjust;
    p5.fill(color.h, saturation, color.b);
    p5.ellipse(disc.x, disc.y, i);

    // Turn off border
    if (i === disc.radius) {
      p5.strokeWeight(0);
    }
  }

  // Then, draw the pupil
  p5.fill(0);
  const pupilHeight = 0.75 * disc.radius;
  const pupilWidth = 0.1 * disc.radius;
  p5.ellipse(disc.x, disc.y, pupilWidth, pupilHeight);

  // Finally, draw the iris (red, textured part) of the eye with a mask slightly larger than the
  // pupil to allow the pupil and some surrounding area to show.
  color = { h: 40, s: 100, b: 82 };
  p5.strokeWeight(0);
  p5.fill(color.h, color.s, color.b);
  p5.ellipse(disc.x, disc.y, 0.9 * disc.radius);
};

const handdrawn = (p5, disc) => {
  p5.colorMode(p5.HSB);
  p5.stroke(1);
  p5.strokeWeight(1);

  const hue = 255 * p5.noise(disc.x, disc.y);
  p5.fill(hue * 1.5, 40, 80);

  p5.noiseDetail(0.01, 0.01);

  p5.beginShape();
  const n = p5.TWO_PI;
  const step = 0.1;
  for (let angle = 0; angle < n; angle += step) {
    const radius = disc.radius * p5.noise(disc.x, disc.y, angle);
    const x = disc.x + radius * p5.cos(angle);
    const y = disc.y + radius * p5.sin(angle);
    p5.curveVertex(x, y);
  }
  p5.endShape(p5.CLOSE);
};

export const draw = (p5, disc) => {
  // Use a predefined algorithm to define the circle's contents

  // grayscale(p5, disc);
  // rainbow(p5, disc);
  // concentricCirclesGrayscale(p5, disc);
  // archeryTarget(p5, disc);
  // evilEye(p5, disc);
  // catsEye(p5, disc);
  // sauronsEye(p5, disc); // in progress
  handdrawn(p5, disc);
};
