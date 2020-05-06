const solution = (numbers) => {
  numbers.sort((a, b) => +`${a}${b}` >= +`${b}${a}` ? -1 : 1);

  return numbers.every(v => v === 0) ? '0' : numbers.join('');
};

test('solution', () => {
  expect(solution([6, 10, 2])).toBe('6210');
  expect(solution([3, 30, 34, 5, 9])).toBe('9534330');
});

