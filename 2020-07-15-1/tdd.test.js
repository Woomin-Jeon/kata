const solution = (triangle) => {
  for (let i = 1; i < triangle.length; i += 1) {
    const topLine = triangle[i - 1];
    const bottomLine = triangle[i];

    for (let j = 0; j < bottomLine.length; j += 1) {
      const biggerTopLineNumber = getBiggerNumberMyTop(topLine, j);
      bottomLine[j] += biggerTopLineNumber;
    }
  }

  const lastElementOfTriangle = triangle[triangle.length - 1];
  return Math.max(...lastElementOfTriangle);
};

const getBiggerNumberMyTop = (topLine, bottomLineIndex) => {
  const left = topLine[bottomLineIndex - 1] || - 1;
  const right = topLine[bottomLineIndex] || - 1;

  return left > right ? left : right;
};

test('getBiggerNumberMyTop', () => {
  expect(getBiggerNumberMyTop([3, 8], 0)).toBe(3);
  expect(getBiggerNumberMyTop([3, 8], 1)).toBe(8);
  expect(getBiggerNumberMyTop([3, 8], 2)).toBe(8);
});

test('solution', () => {
  expect(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]])).toBe(30);
});
