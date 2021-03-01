const solution = (n, money) => {
  const counts = Array(n + 1).fill(0);
  counts[0] = 1;

  money.forEach(unit => {
    for (let i = unit; i <= n; i += 1) {
      counts[i] = counts[i] + counts[i - unit];
    }
  });
  
  return counts[n] % 1000000007;
};

test('solution', () => {
  expect(solution(5, [1, 2, 5])).toBe(4);
});
