const solution = (cacheSize, cities) => {
  const upperCaseCityStack = cities.map(v => v.toUpperCase()).reverse();
  const cacheQueue = [];
  let time = 0;

  while (upperCaseCityStack.length > 0) {
    const target = upperCaseCityStack.pop();
    
    if (isCacheHit(cacheQueue, target)) {
      time += executeCacheHit(cacheQueue, target);
      continue;
    }
    
    time += executeCasheMiss(cacheQueue, target, cacheSize);
  }

  return time;
};

const isCacheHit = (cacheQueue, city) => cacheQueue.indexOf(city) >= 0;

const executeCacheHit = (cacheQueue, city) => {
  const index = cacheQueue.findIndex(v => v === city);
  cacheQueue.splice(index, 1);
  cacheQueue.push(city);

  return 1;
}

const executeCasheMiss = (cacheQueue, city, cacheSize) => {
  if (cacheQueue.length < cacheSize) {
    cacheQueue.push(city);
    return 5;
  }

  cacheQueue.push(city);
  cacheQueue.shift();
  return 5;
}

test('executeCasheMiss', () => {
  const cacheQueue = [1, 2, 3];

  expect(executeCasheMiss(cacheQueue, 4, 3)).toBe(5);
  expect(cacheQueue).toEqual([2, 3, 4]);
});

test('executeCacheHit', () => {
  const cacheQueue = [1, 2, 3];

  expect(executeCacheHit(cacheQueue, 2)).toBe(1);
  expect(cacheQueue).toEqual([1, 3, 2]);
});

test('isCacheHit', () => {
  expect(isCacheHit([1, 2, 3], 3)).toBe(true);
  expect(isCacheHit([1, 2, 3], 4)).toBe(false);
});

test('solution', () => {
  expect(solution(3,
    ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'])).toBe(50);
  expect(solution(3,
    ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Busan', 'Jeju', 'Paris'])).toBe(30);
  expect(solution(1,
    ['Jeju', 'Jeju', 'Jeju', 'Jeju', 'Jeju', 'Jeju', 'Jeju', 'Jeju', 'Jeju', 'Jeju'])).toBe(14);
  expect(solution(2,
    ['Jeju', 'Pangyo', 'jeju', 'jeju', 'jeju', 'jeju', 'Busan', 'pangyo'])).toBe(24);
  expect(solution(0,
    ['Jeju', 'Pangyo', 'Seoul'])).toBe(15);
  expect(solution(0,
    ['Jeju', 'Jeju', 'Jeju'])).toBe(15);
  expect(solution(2,
    ['Jeju', 'Pangyo', 'Seoul'])).toBe(15);
  expect(solution(2,
    ['Jeju', 'Pangyo', 'Jeju'])).toBe(11);
  expect(solution(2,
    ['Jeju'])).toBe(5);
});
