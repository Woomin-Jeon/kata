const solution = (n, computers) => {
  const coms = Array(n).fill(false);
  let networkCount = 0;

  coms.forEach((v, i) => {
    if (v === false) {
      findConnected(coms, i, computers);
      networkCount += 1;
    }
  });

  return networkCount;
};

const findConnected = (coms, root, computers) => {
  computers[root].forEach((v, i) => {
    if (v === 1) {
      if (coms[i] === true) {
        return;
      }

      coms[i] = true;
      findConnected(coms, i, computers);
    }
  });
};

test('solution', () => {
  expect(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]])).toBe(2);
  expect(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]])).toBe(1);
});
