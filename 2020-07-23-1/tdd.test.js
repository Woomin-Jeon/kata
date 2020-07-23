const solution = (N, number) => {
  const results = [];

  searchEveryCase(N, number, results, 0, 0);

  return results.length ? Math.min(...results) : -1;
};

const searchEveryCase = (N, number, results, value, count) => {
  if (count > 8) {
    return;
  }

  if (value === number) {
    results.push(count);
    return;
  }

  let continuousN = N;
  for (let i = 0; i < 8; i += 1) {
    searchEveryCase(N, number, results, value * continuousN, count + 1 + i);
    searchEveryCase(N, number, results, value / continuousN, count + 1 + i);
    searchEveryCase(N, number, results, value + continuousN, count + 1 + i);
    searchEveryCase(N, number, results, value - continuousN, count + 1 + i);

    continuousN = continuousN * 10 + N;
  }
}

test('solution', () => {
  expect(solution(5, 12)).toBe(4);
});
