const solution = (rectangle) => {
  const answer = [1];

  rectangle.forEach((line, y) => {
    line.forEach((target, x) => {
      let d = 1;
      while (rectangle[y + d]) {
        const point1 = rectangle[y][x + d];
        const point2 = rectangle[y + d][x];
        const point3 = rectangle[y + d][x + d];

        if (target === point1 && target === point2 && target === point3) {
          answer.push((d + 1) ** 2);
        }

        d += 1;
      }
    });
  });
  
  return Math.max(...answer);
};

test('solution', () => {
  expect(solution([
    [4, 4, 3, 3 ,3],
    [4, 4, 5, 0 ,5],
    [2, 2, 1, 0 ,0],
    [2, 2, 5, 0 ,5],
  ])).toBe(9);
  expect(solution([
    [4, 4, 3, 4 ,4],
    [4, 1, 5, 3 ,5],
    [1, 2, 1, 0 ,0],
    [4, 3, 1, 3 ,5],
    [1, 2, 1, 4 ,1],
  ])).toBe(9);
  expect(solution([
    [2, 1],
    [2, 1],
    [1, 1],
  ])).toBe(1);
});
