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

export const createVertices = (options: BobaOptions): Vertex[] => {
  const vertices: Vertex[] = [];
  for (let i: number = 0; i < options.numVertices; i++) {
    // TODO: Many of these configs will need to be abstractd to be configurable, and maybe into
    // lists rather than just single values
    const vertex: Vertex = {
      id: i,
      x: Util.getRandomInt(0, options.width - 1),
      y: Util.getRandomInt(0, options.height - 1),
      speed: Util.getRandomFloat(0.5, 2),
      angle: Util.getRandomFloat(0, 360),
      runAwayMultiplier: 1,
      radius: Util.getRandomFloat(8, 16),
      color:
        options.vertexColors[Util.getRandomInt(0, options.vertexColors.length)],
    };
    console.log(
      Util.getRandomInt(0, options.vertexColors.length),
      vertex.color,
    );
    vertices.push(vertex);
  }
  return vertices;
};
