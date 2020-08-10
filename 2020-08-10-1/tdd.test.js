const solution = (n) => {
  let prev = 0;
  let curr = 1;
  let next;
  
  for (let i = 0; i < n; i += 1) {
    next = (prev + curr) % 1234567;
    prev = curr
    curr = next;
  }  

  return curr;
};

test('solution', () => {
  expect(solution(4)).toBe(5);
  expect(solution(5)).toBe(8);
});
