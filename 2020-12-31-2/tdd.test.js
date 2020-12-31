const solution = (n, results) => {
  const board = getBoard(n);

  results.forEach(([winner, loser]) => {
    const winnersWinners = board[winner].winners;
    const winnersLosers = board[winner].losers;
    const losersWinners = board[loser].winners;
    const losersLosers = board[loser].losers;

    addSet(winnersLosers, [...losersLosers, loser]);
    addSet(losersWinners, [...winnersWinners, winner]);

    losersWinners.forEach(losersWinner => board[losersWinner].losers.add(loser));
    winnersLosers.forEach(winnersLoser => board[winnersLoser].winners.add(winner));
    winnersWinners.forEach(winnersWinner => addSet(board[winnersWinner].losers, losersLosers));
    losersLosers.forEach(losersLoser => addSet(board[losersLoser].winners, winnersWinners));
  });

  return Object.keys(board).filter(key => {
    const winningCount = board[key].winners.size;
    const losingCount = board[key].losers.size;

    return winningCount + losingCount === n - 1;
  }).length;
};

const getBoard = (n) =>
  Array(n).fill(0).map((v, i) => i + 1).reduce((acc, cur) => {
    acc[cur] = { winners: new Set(), losers: new Set() };
    return acc;
  }, {});

const addSet = (set, arr) => {
  arr.forEach(v => set.add(v));
}

test('getBoard', () => {
  expect(getBoard(3)).toEqual({
    '1': { winners: new Set(), losers: new Set() },
    '2': { winners: new Set(), losers: new Set() },
    '3': { winners: new Set(), losers: new Set() },
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
