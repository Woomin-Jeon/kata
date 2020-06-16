const solution = (s) => {
  const characters = s.split("");
  const stack = [];

  characters.forEach(char => {
    const topOfStack = stack[stack.length - 1];

    if (char === topOfStack) {
      stack.pop();
      return;
    }
    
    stack.push(char);
  });

  return stack.length === 0 ? 1 : 0;
}

test('solution', () => {
  expect(solution("baabaa")).toBe(1);
  expect(solution("cdcd")).toBe(0);
  expect(solution("cdcdd")).toBe(0);
  expect(solution("cdcddcdc")).toBe(1);
  expect(solution("acdcddcdca")).toBe(1);
});
