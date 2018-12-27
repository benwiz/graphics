// const dfsUtil = (
//   adjList: Adjacency[],
//   vertexID: number,
//   depth: number,
//   maxDepth: number,
//   results: number[][],
// ): void => {
//   console.log(`${depth}: ${vertexID}`);

//   if (depth === maxDepth - 1) {
//     return;
//   }

//   const neighborIDs = adjList[vertexID].neighborIDs;
//   for (const neighborID of neighborIDs) {
//     dfsUtil(adjList, neighborID, depth + 1, maxDepth, results);
//   }
// };

// export const dfs = (adjList: Adjacency[], maxDepth: number): void => {
//   const startVertexID = adjList[0].vertexID;
//   dfsUtil(adjList, startVertexID, 0, maxDepth, []);
// };

///////////////

// const dlsUtil = (
//   adjList: Adjacency[],
//   vertexID: number,
//   depth: number,
//   maxDepth: number,
//   vertices: number[],
//   sets: number[][],
// ): void => {
//   vertices.push(vertexID);
//   console.log(vertices);

//   if (depth === maxDepth) {
//     return;
//   }

//   for (const neighborID of adjList[vertexID].neighborIDs) {
//     // If not already handled
//     // if (vertices.indexOf(neighborID) === -1) {
//     // console.log(`${depth}: ${vertexID} - ${neighborID}`);
//     dlsUtil(adjList, neighborID, depth + 1, maxDepth, vertices, sets);
//     // }
//   }
// };

// // Depth-limited search
// export const dls = (adjList: Adjacency[], depth: number): void => {
//   console.log('\n-----\n-----\n-----\n-----\n');
//   dlsUtil(adjList, adjList[0].vertexID, 0, depth - 2, [], [[]]);
// };

///////////////

// const getDeeperNeighbor = (
//   vertexID: number,
//   neighborIDs: number[],
//   path: number[],
//   maxDepth: number,
// ): number[] => {
//   if (path.length === maxDepth) {
//     return path;
//   }
// };

// const findAllPathsFromVertex = (
//   adjList: Adjacency[],
//   vertexID: number,
//   maxDepth: number,
// ): number[][] => {
//   const paths: number[][] = [];

//   // TODO: Get next neighbor, avoid past vertices. Do recursively
//   const neighborIDs: number[] = adjList[vertexID].neighborIDs;
//   const path: number[] = [vertexID];
//   getDeeperNeighbor(vertexID, neighborIDs, path, maxDepth);

//   return paths;
// };

// export const findAllPaths = (adjList: Adjacency[], maxDepth: number): void => {
//   findAllPathsFromVertex(adjList, 0, maxDepth);
// };

// const createAdjacencyList = (vertices: Vertex[], lines: Line[]): Adjacency[] => {
//   const adjList: Adjacency[] = [];
//   for (const vertex of vertices) {
//     const adj: Adjacency = {
//       vertexID: vertex.id,
//       neighborIDs: [],
//     };

//     // Find all the lines that contain this vertex and add the neighbor if not alraedy added
//     for (const line of lines) {
//       if (vertex.id === line.vertex1.id) {
//         if (adj.neighborIDs.indexOf(line.vertex2.id) === -1) {
//           adj.neighborIDs.push(line.vertex2.id);
//         }
//       } else if (vertex.id === line.vertex2.id) {
//         if (adj.neighborIDs.indexOf(line.vertex1.id) === -1) {
//           adj.neighborIDs.push(line.vertex1.id);
//         }
//       }
//     }

//     adjList.push(adj);
//   }

//   return adjList;
// };

// // To create shapes we run a depth-first search from every vertex on the graph. We only make
// // `numSides` steps. If we can return to the original vertex without repeating edges, then we have
// // formed out shape.
// const createShapes = (numSides: number): Shape[] => {
//   // Create adjacency list (eventually, this should be generated in place of the lines list)
//   const adjList = createAdjacencyList(vertices, lines);

//   const shapes: Shape[] = [];
//   // TODO: I had trouble finding the cycles in a generic way so I'm falling back to just triangles.
//   return shapes;
// };
