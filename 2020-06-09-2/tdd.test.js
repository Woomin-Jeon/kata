const solution = (nums) => {
  const set = new Set(nums);
  return set.size > nums.length/2 ? nums.length/2 : set.size;
};

test('solution', () => {
  expect(solution([3, 1, 2, 3])).toBe(2);
});
