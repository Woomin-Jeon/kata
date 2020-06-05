const solution = (budgets, M) => {
  let min = 1;
  let max = 100000;

  if (computeTotalBudget(budgets, max) <= M) {
    return Math.max(...budgets);
  }

  while(true) {
    const mid = Math.floor((min + max) / 2);

    if (mid === min) {
      return min;
    }

    const totalBudget = computeTotalBudget(budgets, mid);

    if (totalBudget > M) {
      max = mid;
    } else {
      min = mid;
    }
  }
};

const computeTotalBudget = (budgets, upperLimitation) => 
  budgets.reduce((acc, cur) =>
    cur > upperLimitation ? acc + upperLimitation : acc + cur, 0);

test('computeTotalBudget', () => {
  expect(computeTotalBudget([1, 2, 3, 4, 5], 3)).toBe(12);
  expect(computeTotalBudget([1, 2, 3, 4, 5], 5)).toBe(15);
});

test('solution', () => {
  expect(solution([120, 110, 140, 150], 485)).toBe(127);
  expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 54)).toBe(9);
  expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 52)).toBe(8);
});
