const solution = (n, results) => {
  const gameBoard = getGameBoard(n);

  for (let i = 0; i < n; i += 1) {
    updateGameBoard(results, gameBoard);
  }
  
  return Object.keys(gameBoard).reduce((answer, nodeNumber) => {
    const winCount = [...gameBoard[nodeNumber].win].length;
    const loseCount = [...gameBoard[nodeNumber].lose].length;

    return winCount + loseCount === n - 1 ? answer + 1 : answer;
  }, 0);
};

const updateGameBoard = (results, gameBoard) => {
  results.forEach(result => {
    const [winner, loser] = result;

    gameBoard[winner].lose.add(loser);
    gameBoard[loser].win.add(winner);

    [...gameBoard[loser].lose].forEach(loser => gameBoard[winner].lose.add(loser));
    [...gameBoard[winner].win].forEach(winner => gameBoard[loser].win.add(winner));
  });
}

const getGameBoard = (n) => {
  const gameBoard = {};
  for (let i = 1; i <= n; i += 1) {
    gameBoard[i] = { win: new Set(), lose: new Set() };
  }

  return gameBoard;
};

test('updateGameBoard', () => {
  const gameBoard = getGameBoard(3);
  const results = [[1, 2], [1, 3], [3, 2]];
  
  updateGameBoard(results, gameBoard);

  expect(gameBoard).toEqual({
    "1": { "win": new Set([]), "lose": new Set([2, 3]) },
    "2": { "win": new Set([1, 3]), "lose": new Set([]) },
    "3": { "win": new Set([1]), "lose": new Set([2]) },
  });
});

test('getGameBoard', () => {
  expect(getGameBoard(3)).toEqual({
    "1": { "win": new Set(), "lose": new Set() },
    "2": { "win": new Set(), "lose": new Set() },
    "3": { "win": new Set(), "lose": new Set() },
  });
});

test('solution', () => {
  expect(solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]])).toBe(2);
  expect(solution(8, [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8]])).toBe(8);
  expect(solution(8, [[1, 2], [2, 3], [3, 4], [5, 6], [6, 7], [7, 8]])).toBe(0);
  expect(solution(8, [[1, 4], [1, 5], [5, 7], [2, 6], [6, 7], [3, 8], [7, 8]])).toBe(0);
  expect(solution(8, [[1, 4], [1, 5], [5, 7], [2, 6], [6, 7], [3, 8], [7, 8], [4, 3]])).toBe(1);
  expect(solution(5, [[1, 3], [2, 4], [4, 5], [3, 2]])).toBe(5);
  expect(solution(5, [[5, 3], [5, 4], [5, 2], [1, 5]])).toBe(2);
  expect(solution(5, [[5, 3], [5, 4], [2, 5], [2, 1]])).toBe(1);
});
