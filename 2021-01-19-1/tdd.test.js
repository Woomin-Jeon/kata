const solution = (square) => {
  const result = compress(square);

  if (result !== null) {
    return Array(2).fill(0).map((v, i) => result === i ? 1 : 0);
  }

  const answer = search(square);
  
  return [
    answer.filter(v => v === 0).length,
    answer.filter(v => v === 1).length,
  ];
};

const search = (square) => {  
  if (square.length === 1) {
    return [square[0][0]];
  }
  
  const quarterSquares = divideIntoFourSquares(square);

  return quarterSquares.flatMap(quarter => {
    const result = compress(quarter);
    
    return result === null ? [...search(quarter)] : [result];
  });
};

const divideIntoFourSquares = (square) => {
  const halfLength = square.length / 2;
  const length = square.length;

  const quarterOne = square.slice(0, halfLength).map(row => row.slice(0, halfLength));
  const quarterTwo = square.slice(0, halfLength).map(row => row.slice(halfLength, length));
  const quarterThree = square.slice(halfLength, length).map(row => row.slice(0, halfLength));
  const quarterFour = square.slice(halfLength, length).map(row => row.slice(halfLength, length)); 

  return [quarterOne, quarterTwo, quarterThree, quarterFour];
};

const compress = (square) => {
  const size = new Set(square.flat()).size;

  return size === 1 ? square[0][0] : null;
};

test('compress', () => {
  expect(compress([[1]])).toBe(1);
  expect(compress([[1, 1], [1, 1]])).toBe(1);
  expect(compress([[0, 0], [0, 0]])).toBe(0);
  expect(compress([[1, 0], [1, 1]])).toBe(null);
});

test('divideIntoFourSquares', () => {
  expect(divideIntoFourSquares([
    [1, 1, 1, 1],
    [0, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 1, 0, 0],
  ])).toEqual([
    [
      [1, 1],
      [0, 1],
    ],
    [
      [1, 1],
      [1, 1],
    ],
    [
      [0, 0],
      [0, 1],
    ],
    [
      [0, 0],
      [0, 0],
    ],
  ]);
  expect(divideIntoFourSquares([
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
  ])).toEqual([
    [
      [1, 1, 1, 1],
      [0, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 1, 0, 0],
    ],
    [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 1, 1],
      [0, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 1, 1, 1],
    ],
  ]);
});

test('solution', () => {
  expect(solution([
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
  ])).toEqual([10, 15]);
  expect(solution([
    [1],
  ])).toEqual([0, 1]);
  expect(solution([
    [0, 0],
    [0, 0],
  ])).toEqual([1, 0]);
});
