const solution = (n, costs) => {
  const connectedNodeNames = [0];
  let cost = 0;

  const map = createMap(n, costs);
  
  while (connectedNodeNames.length < n) {
    const leastCostChildPath = connectedNodeNames
      .map(nodeName => map.get(nodeName))
      .flat()
      .filter(node => !connectedNodeNames.includes(node.child))
      .sort((a, b) => a.cost - b.cost)[0];

    connectedNodeNames.push(leastCostChildPath.child);
    cost += leastCostChildPath.cost;
  }

  return cost;
};

const createMap = (n, arr) => {
  const map = new Map();
  Array(n).fill().forEach((_, i) => map.set(i, []));
  arr.forEach(([prev, next, cost]) => {
    map.set(prev, [...map.get(prev), { name: prev, child: next, cost }]);
    map.set(next, [...map.get(next), { name: next, child: prev, cost }]);
  });

  return map;
};

test('solution', () => {
  expect(solution(4, [
    [0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]
  ])).toBe(4);
  expect(solution(5, [
    [0, 1, 5], [1, 2, 3], [2, 3, 3], [3, 1, 2], [3, 0, 4], [2, 4, 6], [4, 0, 7]
  ])).toBe(15);
});
