declare interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

// NOTE: Any time this is updated, remember to update `index.js::getDefaultOptions()`
declare interface BobaOptions {
  // Location and size of canvas
  x: number;
  y: number;
  width: number;
  height: number;
  // Vertices configurations
  numVertices: number;
  drawVertices: boolean;
  vertexMinSize: number;
  vertexMaxSize: number;
  vertexMinSpeed: number;
  vertexMaxSpeed: number;
  vertexColors: Color[];
  // Edges configurations
  numNeighbors: number;
  drawEdges: boolean;
  edgeColors: Color[];
  // Shape configurations
  drawShapes: boolean;
  shapeColors: Color[];
}

declare interface Vertex {
  id: number;
  x: number;
  y: number;
  speed: number;
  angle: number;
  runAwayMultiplier: number;
  radius: number;
  color: Color;
}

declare interface Edge {
  vertex1: Vertex;
  vertex2: Vertex;
  color: Color;
}

declare interface Shape {
  vertices: Vertex[];
  color: Color;
}

declare interface UpdateResult {
  vertices: Vertex[];
  edges: Edge[];
  shapes: Shape[];
}
