const solution = (progresses, speeds) => {
  const result = [];
  let count = 0;

  while(true) {
    if (progresses.length === 0) {
      return result;
    }

    progresses = progresses.map((v, i) => v + speeds[i]);
    
    if (progresses[0] >= 100) {
      count = searchComplete(progresses, speeds);
      result.push(count);
    }
  }
};

const searchComplete = (progresses, speeds) => {
  let count = 0;

  while(true) {
    if (progresses[0] >= 100) {
      count += 1;
      progresses.shift();
      speeds.shift();
    } else {
      return count;
    }
  }
}

test('searchComplete', () => {
  expect(searchComplete([100, 200, 300], [1, 1, 1])).toBe(3);
  expect(searchComplete([100, 200, 10], [1, 1, 1])).toBe(2);
  expect(searchComplete([100, 10, 100], [1, 1, 1])).toBe(1);
  expect(searchComplete([100, 100, 30, 100, 100], [1, 1, 1])).toBe(2);
});

test('solution', () => {
  expect(solution([93,30,55], [1,30,5])).toEqual([2,1]);
});
