const solution = (W, H) => {
  return W * H - (W + H - getGCD(W, H));
};

const getGCD = (x, y) => {
  const bigNumber = x >= y ? x : y;
  const smallNumber = x < y ? x : y;

  for (let i = smallNumber; i > 0; i -= 1) {
    if (bigNumber % i === 0 && smallNumber % i === 0) {
      return i;
    }
  }
};

test('getGCD',  () => {
  expect(getGCD(8, 12)).toBe(4);
  expect(getGCD(10, 15)).toBe(5);
});

test('solution', () => {
  expect(solution(8, 12)).toBe(80);
});
