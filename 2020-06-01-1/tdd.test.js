const solution = (n, times) => {
  let min = 1;
  let max = n * Math.max(...times);

  while(true) {
    const mid = Math.floor((max + min) / 2);
    let handleCountByTime = 0;

    if (min > mid) {
      return min;
    }

    times.forEach(v => {
      handleCountByTime += Math.floor(mid / v);
    })

    handleCountByTime >= n ? max = mid - 1 : min = mid + 1;
  }
};

test('solution', () => {
  expect(solution(6, [7, 10])).toBe(28);
});
