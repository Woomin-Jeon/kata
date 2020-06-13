const solution = (arr) => arr.reduce((acc, cur) => getLCM(acc, cur));

const getLCM = (a, b) => {
  for (let i = a > b ? a : b; i <= a * b; i += 1) {
    if (i % a === 0 && i % b === 0) {
      return i;
    }
  }
}

test('getLCM', () => {
  expect(getLCM(9, 6)).toBe(18);
});

test('solution', () => {
  expect(solution([2,6,8,14])).toBe(168);
});
