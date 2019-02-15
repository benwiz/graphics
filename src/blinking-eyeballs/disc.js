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
    color: null,
    pupil: { width: 0, height: 0 },
    blinkPercent: p5.random(),
    blinkDirection: Util.randomElement([-1, 1]),
    blinkRate: Util.getRandomFloat(0, 0.04),
    blinkCooldown: Util.getRandomInt(0, 100),
  };

  // Constrain by selected algorithm, return null if doConstrain is true
  const doConstrain = constrainPadding(p5, disc, 0.4);
  if (doConstrain) return null;

  // Select the color for the iris, hard coding cats eye color scheme for now
  const colors = [
    // Blue
    { h: 200, s: 100, b: 100 },
    // Gold
    { h: 50, s: 100, b: 100 },
    // Green
    { h: 80, s: 100, b: 100 },
  ];
  disc.color = Util.randomElement(colors);

  // NOTE: I think I'm actually using this variable as diameter not radius
  // Determine a radius based on distance to center
  const dist = Util.distance(disc.x, disc.y, 0, 0);
  const maxDist = p5.width / 2;
  const minRadius = 20;
  const maxRadius = 100;
  const radius = Util.scale(dist, maxDist, 0, minRadius, maxRadius);
  disc.radius = radius;

  // Set the pupil size, again this is hard coding cats eye features
  const pupilHeight = 0.85 * disc.radius;
  let pupilWidth = disc.radius * p5.randomGaussian(0.15, 0.5);
  pupilWidth = Math.max(0.1 * disc.radius, pupilWidth);
  pupilWidth = Math.min(0.8 * disc.radius, pupilWidth);
  disc.pupil.width = pupilWidth;
  disc.pupil.height = pupilHeight;

  return disc;
};

// eslint-disable-next-line no-unused-vars
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

// eslint-disable-next-line no-unused-vars
const catsEye = (p5, disc) => {
  p5.colorMode(p5.HSB);
  p5.strokeWeight(1);

  // Set the color for the iris
  p5.stroke(disc.color.h, disc.color.s, 50);

  // The the iris using a gradient. Begin with the outside and decreate saturation inward.
  for (let i = disc.radius; i > 0; i--) {
    const saturationAdjust = Util.scale(i, 0, disc.radius, disc.color.s, 0);
    const saturation = disc.color.s - saturationAdjust;
    p5.fill(disc.color.h, saturation, disc.color.b);
    p5.ellipse(disc.x, disc.y, i);

    // Turn off border
    if (i === disc.radius) {
      p5.strokeWeight(0);
    }
  }

  // Draw the pupil
  p5.fill(0);
  p5.ellipse(disc.x, disc.y, disc.pupil.width, disc.pupil.height);

  // Draw the top eyelid
  const c = 0.5;
  const blinkPercent = Util.scale(disc.blinkPercent, 0, 1, 0.7, 0);
  p5.beginShape();
  p5.vertex(disc.x - disc.radius * 0.5, disc.y);
  p5.bezierVertex(
    // Control point 1
    disc.x - disc.radius * c,
    disc.y - disc.radius * 0.7,
    // Control point 2
    disc.x + disc.radius * c,
    disc.y - disc.radius * 0.7,
    // End point
    disc.x + disc.radius * 0.5,
    disc.y,
  );
  p5.bezierVertex(
    // Control point 2
    disc.x + disc.radius * c,
    disc.y - disc.radius * blinkPercent,
    // Control point 1
    disc.x - disc.radius * c,
    disc.y - disc.radius * blinkPercent,
    // End point
    disc.x - disc.radius * 0.5,
    disc.y,
  );
  p5.endShape();

  // TODO: Draw the lower eyelid
  p5.beginShape();
  p5.vertex(disc.x - disc.radius * 0.5, disc.y);
  p5.bezierVertex(
    // Control point 1
    disc.x - disc.radius * c,
    disc.y + disc.radius * 0.7,
    // Control point 2
    disc.x + disc.radius * c,
    disc.y + disc.radius * 0.7,
    // End point
    disc.x + disc.radius * 0.5,
    disc.y,
  );
  p5.bezierVertex(
    // Control point 2
    disc.x + disc.radius * c,
    disc.y + disc.radius * blinkPercent,
    // Control point 1
    disc.x - disc.radius * c,
    disc.y + disc.radius * blinkPercent,
    // End point
    disc.x - disc.radius * 0.5,
    disc.y,
  );
  p5.endShape();

  // Update the eyelid blink
  if (disc.blinkCooldown === 0) {
    disc.blinkPercent += disc.blinkRate * disc.blinkDirection;
    if (disc.blinkPercent <= disc.blinkRate) {
      // Open -> Closed
      disc.blinkDirection = 1;
      disc.blinkPercent = disc.blinkRate;
      disc.blinkCooldown = Util.getRandomInt(80, 100); // Full pause when open
    } else if (disc.blinkPercent >= 1 - disc.blinkRate) {
      // Closed -> Open
      disc.blinkDirection = -1;
      disc.blinkPercent = 1 - disc.blinkRate;
      disc.blinkCooldown = Util.getRandomInt(1, 8); // Brief pause when closed
    }
  }

  // Update the blink cooldown
  if (disc.blinkCooldown > 0) {
    disc.blinkCooldown -= 1;
  }
};

export const draw = (p5, disc) => {
  // Use a predefined algorithm to define the circle's contents

  // grayscale(p5, disc);
  // rainbow(p5, disc);
  // concentricCirclesGrayscale(p5, disc);
  // archeryTarget(p5, disc);
  // evilEye(p5, disc);
  catsEye(p5, disc);
  // sauronsEye(p5, disc); // in progress
  // handdrawn(p5, disc);
};
