const solution = (N) => {
  let prev = 0;
  let curr = 1;
  let next;
  
  for (let i = 0; i < N + 1; i += 1) {
    next = prev + curr;
    prev = curr
    curr = next;
  }  

  return next * 2;
};

test('solution', () => {
  expect(solution(5)).toBe(26);
  expect(solution(6)).toBe(42);
});
