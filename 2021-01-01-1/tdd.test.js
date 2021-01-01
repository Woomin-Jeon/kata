const solution = (n, times) => {
  let max = 1_000_000_000 * n;
  let min = 1;
  
  while (max >= min) {
    const mid = Math.floor((max + min) / 2);

    const ableCounts = getAbleCountsByLimit(times, mid);
    const totalCount = getTotalCount(ableCounts);

    totalCount >= n
      ? max = mid - 1
      : min = mid + 1;
  }

  return min;
};

const getTotalCount = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

const getAbleCountsByLimit = (times, timeLimit) => {
  return times.map(time => Math.floor(timeLimit / time));
};

test('getAbleCountsByLimit', () => {
  expect(getAbleCountsByLimit([1, 2, 3, 4], 3)).toEqual([3, 1, 1, 0]);
  expect(getAbleCountsByLimit([1, 2, 3, 4], 5)).toEqual([5, 2, 1, 1]);
  expect(getAbleCountsByLimit([1, 2, 3, 4], 8)).toEqual([8, 4, 2, 2]);
});

test('getTotalCount', () => {
  expect(getTotalCount([1, 1, 1])).toBe(3);
  expect(getTotalCount([1, 2, 3])).toBe(6);
});

test('solution', () => {
  expect(solution(6, [7, 10])).toBe(28);
});
