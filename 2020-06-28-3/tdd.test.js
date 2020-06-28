const solution = (n) => pibonaci(n + 1);

const pibonaci = (n) => {
  let previous = 0;
  let current = 1;

  for (let i = 0; i < n; i += 1) {
    let next = (previous + current) % 1000000007
    previous = current
    current = next
  }

  return previous;
}

test('solution', () => {
  expect(solution(4)).toBe(5);
  expect(solution(5)).toBe(8);
  expect(solution(6)).toBe(13);
});
