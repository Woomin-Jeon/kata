const solution = (N) => {
  let count = 0;
  
  while (N > 0) {
    if (N % 2 === 0) {
      N /= 2;
    } else {
      N -= 1;
      count += 1;
    }
  }
  
  return count;
};

test('solution', () => {
  expect(solution(5)).toBe(2);
  expect(solution(6)).toBe(2);
  expect(solution(5000)).toBe(5);
});
