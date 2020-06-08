const solution = (s) => {
  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (count < 0) {
      return false;
    }

    s[i] === "(" ? count += 1 : count -= 1;
  }

  return count === 0;
};

test('solution', () => {
  expect(solution("()()")).toBe(true);
  expect(solution("(())()")).toBe(true);
  expect(solution(")()(")).toBe(false);
  expect(solution("(()(")).toBe(false);
});
