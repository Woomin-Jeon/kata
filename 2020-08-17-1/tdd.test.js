const solution = (n, works) => {
  const sortedWorks = [...works].sort((a, b) => b - a);

  let index = 0;
  while (n > 0) {
    if (sortedWorks[index] < sortedWorks[index + 1]) {
      index += 1;
      continue;
    }
    
    if (sortedWorks[index - 1] === sortedWorks[index]) {
      index = 0;
      continue;
    }

    sortedWorks[index] -= 1;
    n -= 1;
  }
  
  return sortedWorks.reduce((acc, cur) => cur > 0 ? acc + (cur ** 2) : acc, 0);
};

test('solution', () => {
  expect(solution(3, [1, 1])).toBe(0);
  expect(solution(9, [4, 3, 3])).toBe(1);
  expect(solution(10, [4, 7, 1, 3, 7])).toBe(32);
});
