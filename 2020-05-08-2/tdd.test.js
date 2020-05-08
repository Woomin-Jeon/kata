const solution = (board, moves) => {
  const bucket = [];
  let count = 0;

  moves = moves.map(v => v - 1);

  while(true) {
    if (moves.length === 0) {
      return count;
    }

    for (let i = 0; i < board.length; i ++) {
      if (board[i][moves[0]] > 0) {
        if (bucket[bucket.length -1] === board[i][moves[0]]) {
          bucket.pop();
          board[i][moves[0]] = 0;
          count += 2;
          break;
        }
        bucket.push(board[i][moves[0]]);
        board[i][moves[0]] = 0;
        break;
      }
    }

    moves.shift();
  }
};

test('sol', () => {
  expect(solution([
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
  ], [1,5,3,5,1,2,1,4])).toBe(4);
});
