const solution = (heights) => {
  const result = [];

  heights.forEach((_, index, thisArr) => {
    result.push(than(thisArr, index));
  });

  return result;
}

const than = (arr, index) => {
  for (let i = index - 1; i >= 0; i -= 1) {
    if (arr[i] > arr[index]) {
      return i + 1;
    }
  }

  return 0;
};

test('than', () => {
  expect(than([1, 3, 5, 4, 2], 3)).toBe(3);
  expect(than([1, 3, 5, 4, 2], 4)).toBe(4);
  expect(than([1, 3, 5, 4, 2], 2)).toBe(0);
});

test('solution', () => {
  expect(solution([6, 9, 5, 7, 4])).toEqual([0, 0, 2, 2, 4]);
  expect(solution([3, 9, 9, 3, 5, 7, 2])).toEqual([0, 0, 0, 3, 3, 3, 6]);
});
