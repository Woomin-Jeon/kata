const solution = (n) => {
  const binaryCount = countOne(n);

  while(true) {
    n += 1;

    if (countOne(n) === binaryCount) {
      return n;
    }
  }
};

const countOne = (n) => n.toString(2).split("").filter(v => v === "1").length;

test('countOne', () => {
  expect(countOne(78)).toBe(4);
});

test('solution', () => {
  expect(solution(78)).toBe(83);
});
