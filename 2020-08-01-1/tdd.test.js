const solution = (A, B) => {
  const arrA = A.slice().sort((a, b) => a - b);
  const arrB = B.slice().sort((a, b) => a - b);

  let winningScore = 0;
  while (true) {
    const currentA = arrA.pop();
    const currentB = arrB.pop();

    if (!currentA) {
      return winningScore;
    }

    if (currentA >= currentB) {
      arrB.push(currentB);
      continue;
    }
    
    winningScore += 1;
  }
};

test('solution', () => {
  expect(solution([5, 1, 3, 7], [2, 2, 6, 8])).toBe(3);
  expect(solution([2, 2, 2, 2], [1, 1, 1, 1])).toBe(0);
});
