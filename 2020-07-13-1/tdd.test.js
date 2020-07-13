const solution = (land) => {
  for (let i = 1; i < land.length; i += 1) {
    const previousLand = land[i - 1];
    const currentLand = land[i];

    addPreviousLandToCurrentLand(previousLand, currentLand);
  }
  
  const lastRowOfLand = land[land.length - 1];

  return Math.max(...lastRowOfLand);
};

const addPreviousLandToCurrentLand = (previousLand, currentLand) => {
  for (let i = 0; i < 4; i += 1) {
    currentLand[i] += findMaxValueExceptMyColumn(previousLand, i);
  }
};

const findMaxValueExceptMyColumn = (previousLand, columnIndex) => {
  const newPreviousLand = previousLand.slice();

  newPreviousLand.splice(columnIndex, 1);

  return Math.max(...newPreviousLand);
};

test('addPreviousLandToCurrentLand', () => {
  const land = [[1, 2, 4, 5], [5, 6, 7, 9]];
  const previousLand = land[0];
  const currentLand = land[1];

  addPreviousLandToCurrentLand(previousLand, currentLand);

  expect(currentLand).toEqual([10, 11, 12, 13]);
});

test('findMaxValueExceptMyColumn', () => {
  expect(findMaxValueExceptMyColumn([1, 2, 3, 4], 3)).toBe(3);
  expect(findMaxValueExceptMyColumn([1, 2, 3, 4], 2)).toBe(4);
});

test('solution', () => {
  expect(solution([
    [1, 2, 4, 5],
    [5, 6, 7, 9],
    [4, 3, 2, 1]
  ])).toBe(17);
});
