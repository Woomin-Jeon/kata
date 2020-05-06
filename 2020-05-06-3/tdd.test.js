const solution = (priorities, location) => {
  priorities = priorities.map((v, i) => ({ value: v, index: i }));
  const outputs = [];

  while(priorities.length > 0) {
    if (checkPriority(priorities)) {
      outputs.push(priorities[0]);
      priorities.shift();
    } else {
      priorities.push(priorities[0]);
      priorities.shift();
    }
  }

  return outputs.findIndex(output => output.index === location) + 1;
};

const checkPriority = (priorities) => !priorities.some((v, i, thisArr) => thisArr[0].value < v.value);

test('checkPriority', () => {
  expect(checkPriority([
    { value: 2, index: 0 },
    { value: 1, index: 1 },
    { value: 3, index: 2 },
  ])).toBe(false);
  expect(checkPriority([
    { value: 3, index: 0 },
    { value: 1, index: 1 },
  ])).toBe(true);
});

test('solution', () => {
  expect(solution([2, 1, 3, 2], 2)).toBe(1);
});