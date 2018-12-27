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
  sets: number[][],
): void => {
  points.push(pointID);

  if (depth === -1) {
    console.log(points);
    return;
  }

  for (const neighborID of adjList[pointID].neighborIDs) {
    // If not already handled
    if (points.indexOf(neighborID) === -1) {
      console.log(`${depth}: ${pointID} - ${neighborID}`);
      dlsUtil(adjList, neighborID, depth - 1, points, sets);
    }
  }
};

// Depth-limited search
export const dls = (adjList: Adjacency[], depth: number): void => {
  console.log('\n-----\n-----\n-----\n-----\n');
  dlsUtil(adjList, adjList[0].pointID, depth - 2, [], [[]]);
};
