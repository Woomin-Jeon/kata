const solution = (stones, k) => {
  let min = 0;
  let max = 200000000;

  while(true) {
    const mid = Math.floor((max + min) / 2);
    
    if (mid === min) {
      return max;
    }

    let temptStones = stones.map(stone => stone - mid);
    checkContinuous(temptStones, k) ? max = mid : min = mid;
  }
};

const checkContinuous = (temptStones, k) => {
  let continuousCount = 0;

  for (let i = 0; i < temptStones.length; i ++) {
    temptStones[i] <= 0 ? continuousCount += 1 : continuousCount = 0;

    if (continuousCount >= k) {
      return true;
    }
  };

  return false;
};

test('solution', () => {
  expect(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)).toBe(3);
});
