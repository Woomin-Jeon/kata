const solution = (land) => Math.max(...land.reduce((acc, cur) => cur.map((value, index) => value + findLargestValueExceptTargetIndex(acc, index))));
const findLargestValueExceptTargetIndex = (arr, targetIndex) => Math.max(...arr.filter((_, index) => index !== targetIndex));

test('findLargestValueExceptTargetIndex', () => {
  expect(findLargestValueExceptTargetIndex([1, 2, 3, 4], 1)).toBe(4);
  expect(findLargestValueExceptTargetIndex([1, 2, 3, 4], 3)).toBe(3);
});

test('solution', () => {
  expect(solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])).toBe(16);
  expect(solution([
    [1, 2, 3, 50],
    [5, 6, 7, 1000],
    [4, 3, 2, 1],
  ])).toBe(1007);
});
