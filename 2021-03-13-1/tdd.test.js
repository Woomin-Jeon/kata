const solution = (n) => {
  const cases = Array(n + 1).fill(0).slice();

  cases[1] = 1;
  cases[2] = 2;
  cases[3] = 4;

  for (let i = 4; i <= n; i += 1) {
    const adding1 = cases[i - 1] ?? 0;
    const adding2 = cases[i - 2] ?? 0;
    const adding3 = cases[i - 3] ?? 0;

    cases[i] = adding1 + adding2 + adding3;
  }

  return cases[n];
};

test('solution', () => {
  expect(solution(4)).toBe(7);
  expect(solution(7)).toBe(44);
  expect(solution(10)).toBe(274);
});
