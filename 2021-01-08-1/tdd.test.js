const solution = (brown, yellow) => {
  const ableYellowCombinations = getAbleCombinations(yellow);

  return ableYellowCombinations
    .find(([width, height]) => countBrown(width, height) === brown)
    .map(length => length + 2);
};

const getAbleCombinations = (number) => {
  const ableCombinations = [];
  
  for (let i = 1; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      ableCombinations.push([(number / i), i]);
    }
  }

  return ableCombinations;
};

const countBrown = (innerWidth, innerHeight) => {
  const rowLength = (innerWidth) * 2;
  const columnLength = (innerHeight) * 2;
  const connerCount = 4;

  return rowLength + columnLength + connerCount;
};

test('countBrown', () => {
  expect(countBrown(2, 1)).toBe(10);
  expect(countBrown(3, 1)).toBe(12);
  expect(countBrown(3, 2)).toBe(14);
});

test('getAbleCombinations', () => {
  expect(getAbleCombinations(4)).toEqual([[4, 1], [2, 2]]);
  expect(getAbleCombinations(9)).toEqual([[9, 1], [3, 3]]);
  expect(getAbleCombinations(12)).toEqual([[12, 1], [6, 2], [4, 3]]);
});

test('solution', () => {
  expect(solution(10, 2)).toEqual([4, 3]);
  expect(solution(8, 1)).toEqual([3, 3]);
  expect(solution(24, 24)).toEqual([8, 6]);
});
