const solution = (clothes) => {
  const kinds = clothes.map(([cloth, kind]) => kind);
  const map = new Map();
  
  kinds.forEach(kind => {
    const value = map.get(kind) ?? 0;

    map.set(kind, value + 1)
  });

  return [...map].reduce((acc, [key, value]) => acc * (value + 1), 1) - 1;
};

test('solution', () => {
  expect(solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])).toBe(5);
  expect(solution([
    ['crow_mask', 'face'],
    ['blue_sunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ])).toBe(3);
});
