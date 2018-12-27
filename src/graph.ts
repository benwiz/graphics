// const dfsUtil = (
//   adjList: Adjacency[],
//   pointID: number,
//   depth: number,
//   maxDepth: number,
//   results: number[][],
// ): void => {
//   console.log(`${depth}: ${pointID}`);

//   if (depth === maxDepth - 1) {
//     return;
//   }

//   const neighborIDs = adjList[pointID].neighborIDs;
//   for (const neighborID of neighborIDs) {
//     dfsUtil(adjList, neighborID, depth + 1, maxDepth, results);
//   }
// };

// export const dfs = (adjList: Adjacency[], maxDepth: number): void => {
//   const startPointID = adjList[0].pointID;
//   dfsUtil(adjList, startPointID, 0, maxDepth, []);
// };

///////////////

// const dlsUtil = (
//   adjList: Adjacency[],
//   pointID: number,
//   depth: number,
//   maxDepth: number,
//   points: number[],
//   sets: number[][],
// ): void => {
//   points.push(pointID);
//   console.log(points);

//   if (depth === maxDepth) {
//     return;
//   }

//   for (const neighborID of adjList[pointID].neighborIDs) {
//     // If not already handled
//     // if (points.indexOf(neighborID) === -1) {
//     // console.log(`${depth}: ${pointID} - ${neighborID}`);
//     dlsUtil(adjList, neighborID, depth + 1, maxDepth, points, sets);
//     // }
//   }
// };

// // Depth-limited search
// export const dls = (adjList: Adjacency[], depth: number): void => {
//   console.log('\n-----\n-----\n-----\n-----\n');
//   dlsUtil(adjList, adjList[0].pointID, 0, depth - 2, [], [[]]);
// };

///////////////

// const getDeeperNeighbor = (
//   pointID: number,
//   neighborIDs: number[],
//   path: number[],
//   maxDepth: number,
// ): number[] => {
//   if (path.length === maxDepth) {
//     return path;
//   }
// };

// const findAllPathsFromPoint = (
//   adjList: Adjacency[],
//   pointID: number,
//   maxDepth: number,
// ): number[][] => {
//   const paths: number[][] = [];

//   // TODO: Get next neighbor, avoid past points. Do recursively
//   const neighborIDs: number[] = adjList[pointID].neighborIDs;
//   const path: number[] = [pointID];
//   getDeeperNeighbor(pointID, neighborIDs, path, maxDepth);

//   return paths;
// };

// export const findAllPaths = (adjList: Adjacency[], maxDepth: number): void => {
//   findAllPathsFromPoint(adjList, 0, maxDepth);
// };

// const createAdjacencyList = (points: Point[], lines: Line[]): Adjacency[] => {
//   const adjList: Adjacency[] = [];
//   for (const point of points) {
//     const adj: Adjacency = {
//       pointID: point.id,
//       neighborIDs: [],
//     };

//     // Find all the lines that contain this point and add the neighbor if not alraedy added
//     for (const line of lines) {
//       if (point.id === line.point1.id) {
//         if (adj.neighborIDs.indexOf(line.point2.id) === -1) {
//           adj.neighborIDs.push(line.point2.id);
//         }
//       } else if (point.id === line.point2.id) {
//         if (adj.neighborIDs.indexOf(line.point1.id) === -1) {
//           adj.neighborIDs.push(line.point1.id);
//         }
//       }
//     }

//     adjList.push(adj);
//   }

//   return adjList;
// };

// // To create shapes we run a depth-first search from every point on the graph. We only make
// // `numSides` steps. If we can return to the original point without repeating edges, then we have
// // formed out shape.
// const createShapes = (numSides: number): Shape[] => {
//   // Create adjacency list (eventually, this should be generated in place of the lines list)
//   const adjList = createAdjacencyList(points, lines);

//   const shapes: Shape[] = [];
//   // TODO: I had trouble finding the cycles in a generic way so I'm falling back to just triangles.
//   return shapes;
// };
