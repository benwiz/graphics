const dfsUtil = (
  adjList: Adjacency[],
  pointID: number,
  visited: Boolean[],
): void => {
  visited[pointID] = true;
  console.log(pointID);

  const neighborIDs = adjList[pointID].neighborIDs;
  for (const neighborID of neighborIDs) {
    if (!visited[neighborID]) {
      dfsUtil(adjList, neighborID, visited);
    }
  }
};

export const dfs = (adjList: Adjacency[]): void => {
  const visited: Boolean[] = [];
  for (let i = 0; i < adjList.length; i++) {
    visited[i] = false;
  }

  dfsUtil(adjList, adjList[0].pointID, visited);
};
