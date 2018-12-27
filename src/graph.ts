// const dfsUtil = (
//   adjList: Adjacency[],
//   pointID: number,
//   visited: Boolean[],
//   points: number[],
//   maxDepth: number,
// ): number[] => {
//   visited[pointID] = true;
//   // If we have reached maxDepth, then check if the starting point is a neighbor of the current
//   // point. If it is, we must save that shape.
//   if (points.length === maxDepth) {
//     pointID = <number>points.pop();
//     return dfsUtil(adjList, pointID, visited, points, maxDepth);
//   }

//   points.push(pointID);

//   const neighborIDs = adjList[pointID].neighborIDs;
//   for (const neighborID of neighborIDs) {
//     if (!visited[neighborID]) {
//       return dfsUtil(adjList, neighborID, visited, points, maxDepth);
//     }
//   }

//   return points;
// };

// export const dfs = (adjList: Adjacency[], maxDepth: number): number[] => {
//   const visited: Boolean[] = [];
//   for (let i = 0; i < adjList.length; i++) {
//     visited[i] = false;
//   }

//   const depth = 0;
//   const startPointID = adjList[0].pointID;
//   return dfsUtil(adjList, startPointID, visited, [], maxDepth);
// };

const dlsUtil = (
  adjList: Adjacency[],
  pointID: number,
  depth: number,
  points: number[],
  shapes: number[][],
): void => {
  if (depth < 0) return;

  points.push(pointID);
  shapes[shapes.length - 1].push(pointID);

  if (depth === 0) {
    const latestShape = shapes[shapes.length - 1];
    const newShape: number[] = latestShape.slice(0, latestShape.length - 1);
    shapes.push(newShape);
  }

  for (const neighborID of adjList[pointID].neighborIDs) {
    // If not already handled
    if (points.indexOf(neighborID) === -1) {
      console.log(`${depth}: ${pointID} - ${neighborID}`, shapes);
      dlsUtil(adjList, neighborID, depth - 1, points, shapes);
    }
  }
};

// Depth-limited search
export const dls = (adjList: Adjacency[], depth: number): void => {
  console.log('\n-----\n-----\n-----\n-----\n');
  dlsUtil(adjList, adjList[0].pointID, depth - 2, [], [[]]);
};
