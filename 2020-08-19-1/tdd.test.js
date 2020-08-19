const solution = (n, s) => n > s ? [-1] : Array(n).fill(Math.floor(s / n)).map((v, i) => i < n - s % n ? v : v + 1);

test('solution', () => {
  expect(solution(3, 11)).toEqual([3, 4, 4]);
  expect(solution(2, 9)).toEqual([4, 5]);
});
