const solution = (arr1, arr2) => {
  const row = arr1.length;
  const column = arr2[0].length;
  const calculationCount = arr2.length;
  const result = Array(row).fill(0).map(v => Array(column).fill(0));

  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < column; j += 1) {
      for (let k = 0; k < calculationCount; k += 1) {
        result[i][j] += arr1[i][k] * arr2[k][j]
      }
    }
  }

  return result;
};

test('solution', () => {
  expect(solution([
    [1, 4],
    [3, 2],
    [4, 1],
  ],[
    [3, 3],
    [3, 3], 
  ])).toEqual([
    [15, 15],
    [15, 15],
    [15, 15],
  ]);
  expect(solution([
    [2, 3, 2],
    [4, 2, 4],
    [3, 1, 4],
  ],[
    [5, 4, 3],
    [2, 4, 1],
    [3, 1, 1],
  ])).toEqual([
    [22, 22, 11],
    [36, 28, 18],
    [29, 20, 14],
  ]);
});
