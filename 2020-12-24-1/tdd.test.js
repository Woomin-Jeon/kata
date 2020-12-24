const solution = (numbers) => {
  const result = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
  
  return result[0] === '0' ? '0' : result;
};

test('solution', () => {
  expect(solution([6, 10, 2])).toBe("6210");
  expect(solution([3, 30, 34, 5, 9])).toBe("9534330");
  expect(solution([0, 0, 0])).toBe("0");
});
