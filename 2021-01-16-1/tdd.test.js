const solution = (numbers) => pipe(numbers, [getAddedNumbers, removeDuplication, sortByAscending]);

const pipe = (initialValue, funcs) => funcs.reduce((result, func) => func(result), initialValue);

const getAddedNumbers = (numbers) =>
  numbers.flatMap((num1, index1) =>
    numbers.map((num2, index2) => index1 === index2 ? null : num1 + num2).filter(v => v));

const removeDuplication = (arr) => [...new Set(arr)];

const sortByAscending = (arr) => [...arr].sort((a, b) => a - b);

test('getAddedNumbers', () => {
  expect(getAddedNumbers([3, 4, 5])).toEqual([7, 8, 7, 9, 8, 9]);
  expect(getAddedNumbers([1, 1, 10])).toEqual([2, 11, 2, 11, 11, 11]);
});

test('removeDuplication', () => {
  expect(removeDuplication([1, 1, 1, 2, 3])).toEqual([1, 2, 3]);
  expect(removeDuplication([1, 2, 1, 2, 3])).toEqual([1, 2, 3]);
});

test('sortByAscending', () => {
  expect(sortByAscending([2, 1, 3, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  expect(sortByAscending([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});

test('solution', () => {
  expect(solution([2, 1, 3, 4, 1])).toEqual([2, 3, 4, 5, 6, 7]);
  expect(solution([5, 0, 2, 7])).toEqual([2, 5, 7, 9, 12]);
});
