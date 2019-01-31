export const create = (p5) => {
  const disc = {
    x: p5.randomGaussian(0, 100),
    y: p5.randomGaussian(0, 100),
    z: p5.randomGaussian(0, 100),
    radius: 50,
  };

  return disc;
};

export const setupDrawing = (p5) => {
  p5.fill(200);
  p5.stroke(0);
  p5.strokeWeight(1);
};

export const draw = (p5, disc) => {
  p5.ellipse(disc.x, disc.y, disc.radius, disc.radius);
};
