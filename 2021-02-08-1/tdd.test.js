const solution = (nodeinfo) => {
  const nodes = nodeinfo
    .map(([xPos, yPos], index) => ({ number: index + 1, xPos, yPos }))
    .sort((a, b) => b.yPos - a.yPos);
  const graph = makeGraph(nodes);

  return [preorder(graph.root), postorder(graph.root)];
};

const makeGraph = (nodes) => {
  const graph = { root: null };
  
  nodes.forEach((node) => {
    if (!graph.root) {
      graph.root = node;
      return;
    }

    search(graph, graph.root, node);
  });

  return graph;
};

const search = (graph, parentNode, targetNode) => {
  const childlessCondition = !parentNode.leftChild && !parentNode.rightChild;
  const anyChild = parentNode.leftChild || parentNode.rightChild;

  if (childlessCondition || anyChild.yPos === targetNode.yPos) {
    insertChild(parentNode, targetNode);
    return;
  }

  targetNode.xPos > parentNode.xPos
    ? search(graph, parentNode.rightChild, targetNode)
    : search(graph, parentNode.leftChild, targetNode);
};

const preorder = (currentNode) => {
  if (!currentNode) {
    return [] ;
  }
  
  return [
    currentNode.number,
    ...preorder(currentNode.leftChild),
    ...preorder(currentNode.rightChild),
  ];
};

const postorder = (currentNode) => {
  if (!currentNode) {
    return [];
  }
  
  return [
    ...postorder(currentNode.leftChild),
    ...postorder(currentNode.rightChild),
    currentNode.number,
  ];
};

const insertChild = (parentNode, childNode) => {
  parentNode.xPos < childNode.xPos
    ? parentNode.rightChild = childNode
    : parentNode.leftChild = childNode;
    
  childNode.parent = parentNode;
};

test('solution', () => {
  expect(solution([
    [5, 3],
    [11, 5],
    [13, 3],
    [3, 5],
    [6, 1],
    [1, 3],
    [8, 6],
    [7, 2],
    [2, 2],
  ])).toEqual([
    [7, 4, 6, 9, 1, 8, 5, 2, 3],
    [9, 6, 5, 8, 1, 4, 3, 2, 7],
  ]);
});
