const solution = (n) => {
  const counts = Array(n + 1).fill(0).slice();

  for (let i = 2; i <= n; i += 1) {
    const case1 = (counts[i / 3] ?? Infinity) + 1;
    const case2 = (counts[i / 2] ?? Infinity) + 1;
    const case3 = (counts[i - 1] ?? Infinity) + 1; 

    const minimumCount = Math.min(case1, case2 ,case3);

    counts[i] = minimumCount;
  }

  return counts[n];
};

test('solution', () => {
  expect(solution(2)).toBe(1);
  expect(solution(10)).toBe(3);
});
