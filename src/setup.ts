import * as Util from './util';

export const createCanvas = (
  x: number,
  y: number,
  width: number,
  height: number,
): HTMLCanvasElement => {
  // Create canvas
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  // Set css-based location
  canvas.style.position = 'absolute';
  canvas.style.left = String(x);
  canvas.style.top = String(y);
  canvas.style.zIndex = '-1';

  // Append canvas to dom and return canvas
  document.body.appendChild(canvas);
  return canvas;
};

export const createVertices = (
  numVertices: number,
  maxX: number,
  maxY: number,
): Vertex[] => {
  const vertices: Vertex[] = [];
  for (let i: number = 0; i < numVertices; i++) {
    // TODO: Many of these configs will need to be abstractd to be configurable, and maybe into
    // lists rather than just single values
    const vertex: Vertex = {
      id: i,
      x: Util.getRandomInt(0, maxX),
      y: Util.getRandomInt(0, maxY),
      speed: Util.getRandomFloat(0.5, 2),
      angle: Util.getRandomFloat(0, 360),
      runAwayMultiplier: 1,
      radius: Util.getRandomFloat(8, 16),
      color: {
        r: 30,
        g: 144,
        b: 255,
        a: 0.1,
      },
    };
    vertices.push(vertex);
  }
  return vertices;
};
