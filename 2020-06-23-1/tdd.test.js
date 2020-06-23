const solution = (m, n, board) => {
  const checkBoard = Array(m).fill(0).map(v => Array(n).fill(0));
  const mainBoard = board.map(v => v.split(""));
  let popedBlockCount = 0;  

  while (true) {
    const beforePopedBlockCount = popedBlockCount;

    checkPopBlock(mainBoard, checkBoard);
    popedBlockCount += countPopBlockAndClearBoard(checkBoard, mainBoard);
    dropTheBlocks(mainBoard);

    const afterPopedBlockCount = popedBlockCount;

    if (beforePopedBlockCount === afterPopedBlockCount) {
      return popedBlockCount;
    }
  }
};

const checkPopBlock = (mainBoard, checkBoard) => {
  for (let i = 0; i < mainBoard.length - 1; i += 1) {
    for (let j = 0; j < mainBoard[0].length - 1; j += 1) {
      if (mainBoard[i][j] == '0') {
        continue;
      }

      if (mainBoard[i][j] == mainBoard[i][j+1]
            && mainBoard[i][j+1] == mainBoard[i+1][j]
            && mainBoard[i][j+1] == mainBoard[i+1][j+1]) {
        checkBoard[i][j] += 1;
        checkBoard[i][j+1] += 1;
        checkBoard[i+1][j] += 1;
        checkBoard[i+1][j+1] += 1;
      }
    }
  }
}

const countPopBlockAndClearBoard = (checkBoard, mainBoard) => {
  let count = 0;
  for (let i = 0; i < checkBoard.length; i += 1) {
    for (let j = 0; j < checkBoard[0].length; j += 1) {
      if (checkBoard[i][j] > 0) {
        checkBoard[i][j] = 0;
        mainBoard[i][j] = '0'
        count += 1;
      }
    }
  }

  return count;
}

const dropTheBlocks = (mainBoard) => {
  for (let i = mainBoard.length - 1; i >= 0; i -= 1) {
    for (let j = mainBoard[0].length - 1; j >= 0; j -= 1) {
      if (mainBoard[i][j] == '0') {
        let height = i - 1;
        while (height >= 0) {
          if (mainBoard[height][j] != '0') {
            mainBoard[i][j] = mainBoard[height][j];
            mainBoard[height][j] = '0';
            break;
          }
          height -= 1;
        }
      }
    }
  }
};

test('dropTheBlocks', () => {
  const mainBoard = [
    ['C','C','B','D','E'],
    ['C','C','B','D','E'],
    ['0','0','0','D','E'],
    ['0','0','0','B','F'],
    ['C','C','B','B','F'],
  ];

  dropTheBlocks(mainBoard);
  
  expect(mainBoard).toEqual([
    ['0','0','0','D','E'],
    ['0','0','0','D','E'],
    ['C','C','B','D','E'],
    ['C','C','B','B','F'],
    ['C','C','B','B','F'],
  ]);
});


test('countPopBlockAndClearBoard', () => {
  const checkBoard = [
    [0,0,0,0,0],
    [1,2,1,0,0],
    [1,2,1,0,0],
    [0,0,0,0,0],
  ];
  
  const mainBoard = [
    ['C','C','B','D','E'],
    ['A','A','A','D','E'],
    ['A','A','A','B','F'],
    ['C','C','B','B','F'],
  ];

  expect(countPopBlockAndClearBoard(checkBoard, mainBoard)).toBe(6); 
  expect(checkBoard).toEqual([
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
  ]);
  expect(mainBoard).toEqual([
    ['C','C','B','D','E'],
    ['0','0','0','D','E'],
    ['0','0','0','B','F'],
    ['C','C','B','B','F'],
  ]);
});

test('checkPopBlock', () => {
  const checkBoard = Array(4).fill(0).map(v => Array(5).fill(0));
  const mainBoard = [
    ['C','C','B','D','E'],
    ['A','A','A','D','E'],
    ['A','A','A','B','F'],
    ['C','C','B','B','F'],
  ]

  checkPopBlock(mainBoard, checkBoard);

  expect(checkBoard).toEqual([
    [0,0,0,0,0],
    [1,2,1,0,0],
    [1,2,1,0,0],
    [0,0,0,0,0],
  ]);
});

test('solution', () => {
  expect(solution(4, 5, [
    'CCBDE',
    'AAADE',
    'AAABF',
    'CCBBF'
  ])).toBe(14);
  expect(solution(6, 6, [
      'TTTANT',
      'RRFACC',
      'RRRFCC',
      'TRRRAA',
      'TTMMMF',
      'TMMTTJ'
  ])).toBe(15);
});
