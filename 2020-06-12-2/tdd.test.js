const solution = (n, vertex) => {
  const pathMap = new Map();
  const visitMap = new Map();

  for (let i = 1; i <= n; i += 1) {
    visitMap.set(i, false);
  }

  vertex.forEach(v => {
    const node1 = v[0];
    const node2 = v[1];

    pathMap.has(node1)
      ? pathMap.set(node1, [...pathMap.get(node1), node2])
      : pathMap.set(node1, [node2]);
  
    pathMap.has(node2)
      ? pathMap.set(node2, [...pathMap.get(node2), node1])
      : pathMap.set(node2, [node1]);
  });

  const shortestPathMap = new Map();

  const bfsQueue = [{ node: 1, depth: 1 }];
  
  while(bfsQueue.length > 0) {
    const current = bfsQueue.shift();
    const child = pathMap.get(current.node)
      .filter(v => !visitMap.get(v))
      .map(v => ({ node: v, depth: current.depth + 1 }));

    visitMap.set(current.node, true);
    
    if (shortestPathMap.has(current.node)) {
      continue;
    }

    shortestPathMap.set(current.node, current.depth);

    bfsQueue.push(...child);
  }

  const pathes = [];
  shortestPathMap.forEach((value, key) => {
    pathes.push(value);
  });
  
  const furthestDistance = Math.max(...pathes);

  return pathes.filter(v => v === furthestDistance).length;
}

test('solution', () => {
  expect(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])).toBe(3);
  expect(solution(7, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2], [5, 7]])).toBe(1);
  expect(solution(7, [[1, 2], [2, 5], [5, 7], [4, 7], [2, 7], [1, 4], [1, 3], [3, 6], [3, 4]])).toBe(3);
});
