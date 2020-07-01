const solution = (priorities, location) => {
  const readyQueue = priorities.map((v, i) => ({ index: i, priority: v }));
  const completes = [];

  while (readyQueue.length > 0) {
    const target = readyQueue.shift();
    
    if (doMoreImportantDocumentsExist(target, readyQueue)) {
      readyQueue.push(target);
      continue;
    }

    completes.push(target);
  }

  return completes.findIndex(v => v.index === location) + 1;
};

const doMoreImportantDocumentsExist = (target, priorities) =>
  !!priorities.find(v => v.priority > target.priority);

test('doMoreImportantDocumentsExist', () => {
  expect(doMoreImportantDocumentsExist({ index: 10, priority: 2 }, [
    { index: 0, priority: 1 },
    { index: 1, priority: 2 },
    { index: 2, priority: 3 },
    { index: 3, priority: 2 },
    ])).toBe(true);
});

test('solution', () => {
  expect(solution([2, 1, 3, 2], 2)).toBe(1);
  expect(solution([1, 1, 9, 1, 1, 1], 0)).toBe(5);
});
