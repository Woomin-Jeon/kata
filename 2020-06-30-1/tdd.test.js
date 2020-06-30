const solution = (board) => {
  for (let y = 1; y < board.length; y += 1) {
    for (let x = 1; x < board[0].length; x += 1) {
      const A = board[y-1][x-1];
      const B = board[y-1][x];
      const C = board[y][x-1];
      const D = board[y][x];
      
      if (D > 0 && C > 0 && B > 0 && A > 0) {
        board[y][x] = Math.min(A, B, C) + 1
      }
    }
  }
  
  return Math.max(...board.map(v => Math.max(...v))) ** 2;
}

test('solution', () => {
  expect(solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0]
  ])).toBe(9);
  expect(solution([
    [0, 0, 1, 1],
    [1, 1, 1, 1]
  ])).toBe(4);
  expect(solution([
    [1, 1, 1, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 1]
  ])).toBe(1);
  expect(solution([
    [1, 0, 0, 0],
  ])).toBe(1);
  expect(solution([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1],
  ])).toBe(9);
});
