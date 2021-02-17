const solution = (n) => hanoi(n, 1, 3);

const hanoi = (n, here, destination) => {
  if (n === 1) {
    return [[here, destination]];
  }

  const [middle] = [1, 2, 3].filter(v => v !== here && v !== destination);

  return [
    ...hanoi(n - 1, here, middle),
    [here, destination],
    ...hanoi(n - 1, middle, destination),
  ];
};

test('solution', () => {
  expect(solution(2)).toEqual([[1, 2], [1, 3], [2, 3]]);
  expect(solution(3)).toEqual([[1, 3], [1, 2], [3, 2], [1, 3], [2, 1], [2, 3], [1, 3]]);
});
