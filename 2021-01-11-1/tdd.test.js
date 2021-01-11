const solution = (jobs) => {
  const tasks = jobs
    .map(([start, length]) => ({ start, length }))
    .sort((a, b) => a.length - b.length);
  
  let currentTime = -1;
  let nextEndTime = 0;
  let totalTime = 0;

  while (tasks.length > 0) {
    currentTime += 1;
    
    if (nextEndTime > currentTime) continue;

    const target = findAndRemoveFromOrigin(tasks, task => task.start <= currentTime);

    if (!target) continue;  

    nextEndTime = currentTime + target.length;
    totalTime += (currentTime + target.length - target.start);
  }

  return Math.floor(totalTime / jobs.length);
};

const findAndRemoveFromOrigin = (arr, callback) => {
  const index = arr.findIndex(callback);
  const target = arr[index];

  if (!target) return null;

  arr.splice(index, 1);

  return target;
};

test('findAndRemoveFromOrigin', () => {
  const arr = [1, 2, 3, 4];
  const callback = v => v === 2;

  expect(findAndRemoveFromOrigin(arr, callback)).toBe(2);
  expect(arr).toEqual([1, 3, 4]);
});

test('solution', () => {
  expect(solution([[0, 3], [1, 9], [2, 6]])).toBe(9);
});
