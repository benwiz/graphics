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
  // Edges configurations
  numNeighbors: number;
  drawEdges: boolean;
  // Shape configurations
  drawShapes: boolean;
}

declare interface Vertex {
  id: number;
  x: number;
  y: number;
  speed: number;
  angle: number;
  runAwayMultiplier: number;
  radius: number;
  color: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
}

declare interface Edge {
  vertex1: Vertex;
  vertex2: Vertex;
}

declare interface Adjacency {
  vertexID: number;
  neighborIDs: number[];
}

declare interface Shape {
  vertices: Vertex[];
}

declare interface UpdateResult {
  vertices: Vertex[];
  edges: Edge[];
  shapes: Shape[];
}
