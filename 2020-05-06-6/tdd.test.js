const solution = (citations) => {
  const max = Math.max(...citations);

  if (max === 0) {
    return 0;
  }

  for (let i = max; i > 0; i --) {
    let moreThan = citations.filter(v => v >= i).length;
    let lessThan = citations.filter(v => v <= i).length;

    if (moreThan >= i && lessThan <= i) {
      return i;
    }
  }
};

test('solution', () => {
  expect(solution([3, 0, 6, 1, 5])).toBe(3);
  expect(solution([5, 5, 5, 5])).toBe(4);
  expect(solution([0, 0, 0, 0])).toBe(0);
});
