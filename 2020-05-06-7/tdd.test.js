const solution = (clothes) => {
  const map = new Map();
  clothes.forEach((v, i) => {
    let getValue = map.get(clothes[i][1]);

    if (getValue) {
      map.set(clothes[i][1], getValue + 1);
    } else {
      map.set(clothes[i][1], 1);
    }
  });

  const kindOfClothes = [];
  map.forEach((value, key) => {
    kindOfClothes.push(value + 1);
  });

  return kindOfClothes.reduce((acc, cur) => acc * cur, 1) - 1;
};

test('solution', () => {
  expect(solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear']
  ])).toBe(5);
});
