const solution = (numbers, target) => recursive(numbers, 0).filter(v => v === target).length;

const recursive = (numbers, accumulationValue) => {
  if (numbers.length === 0) {
    return [accumulationValue];
  }

  const newNumbers = numbers.slice();
  const value = newNumbers.shift();

  return [
    ...recursive(newNumbers, accumulationValue + value),
    ...recursive(newNumbers, accumulationValue - value),
  ];
};

test('solution', () => {
  expect(solution([1, 1, 1, 1, 1], 3)).toBe(5);
});
