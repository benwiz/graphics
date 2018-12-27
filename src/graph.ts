const dfsUtil = (
  adjList: Adjacency[],
  startPointID: number,
  pointID: number,
  visited: Boolean[],
  depth: number,
): void => {
  // If we have reached maxDepth-1 (because we count from 0), then check if the starting point
  // is a neighbor of the current point. If it is, we must save that triangle.

  visited[pointID] = true;
  console.log(pointID, depth);

  depth += 1;

  const neighborIDs = adjList[pointID].neighborIDs;
  for (const neighborID of neighborIDs) {
    if (!visited[neighborID]) {
      dfsUtil(adjList, startPointID, neighborID, visited, depth);
    }
  }
};

export const dfs = (adjList: Adjacency[]): void => {
  const visited: Boolean[] = [];
  for (let i = 0; i < adjList.length; i++) {
    visited[i] = false;
  }

  const depth = 0;
  const startPointID = adjList[0].pointID;
  dfsUtil(adjList, startPointID, startPointID, visited, depth);
};
