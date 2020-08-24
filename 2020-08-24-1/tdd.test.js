const solution = (key, lock) => {
  const marginedLock = createMargin(lock, key.length);
  const posBoundary = marginedLock.length - key.length + 1;

  return Array(posBoundary).fill(Array(posBoundary).fill(null))
    .some((line, y) => line.some((e, x) => checkKey(marginedLock, key, x, y)));
};

const checkKey = (marginedLock, key, x, y) =>
  Array(4).fill().some((e, i) => {
    const resultLock = sumKeyToLock(marginedLock, key = turn(key), x, y);
    return checkIsLockFull(resultLock, key.length);
  });

const turn = (arr) => {
  const turnedArray = Array(arr.length).fill(null).map(v => []);
  arr.forEach(line => turnedArray.forEach((e, i) => e.unshift(line[i])));

  return turnedArray;
};

const createMargin = (arr, num) => {
  const margin = num - 1;
  const newArrayLength = arr.length + (margin * 2);
  const newArray = [];

  const zeroFiledArrayAsManyAsNewArrayLength = Array(newArrayLength).fill(0).slice();
  const zeroFiledArrayAsManyAsMargin = Array(margin).fill(0).slice();

  Array(newArrayLength).fill().forEach((e, i) => {
    if (i < margin || i >= newArrayLength - margin) {
      newArray.push(zeroFiledArrayAsManyAsNewArrayLength);
      return;
    }

    const original = arr[i - margin];
    const additional = zeroFiledArrayAsManyAsMargin;
    const part = [...additional, ...original, ...additional];
    newArray.push(part);
  });

  return newArray;
}

const checkIsLockFull = (marginedArray, num) => {
  const margin = num - 1;
  const originalLengthOfLock = marginedArray.length - (margin * 2);

  const originalLock = [];
  Array(marginedArray.length).fill().forEach((e, i) => {
    if (i < margin || i >= marginedArray.length - margin) {
      return;
    }

    const originalPart = marginedArray[i].slice(margin, margin + originalLengthOfLock);
    originalLock.push(originalPart);
  });

  return originalLock.reduce((acc, cur) => acc + cur.filter(v => v === 1).length, 0)
    === (originalLengthOfLock ** 2);
};

const sumKeyToLock = (marginedLock, key, xPos, yPos) => {
  const copiedLock = marginedLock.map(line => line.slice());

  key.forEach((line, y) =>
    line.forEach((e, x) =>
      copiedLock[y + yPos][x + xPos] += key[y][x]));

  return copiedLock;
};

test('sumKeyToLock', () => {
  const key = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 0],
  ];

  const marginedLock = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];

  const [xPos, yPos] = [1, 0];

  expect(sumKeyToLock(marginedLock, key, xPos, yPos)).toEqual([
    [0, 1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 2, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('checkIsLockFull', () => {
  expect(checkIsLockFull([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ], 3)).toBe(true);
});

test('createMargin', () => {
  expect(createMargin([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ], 3)).toEqual([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ])
});

test('turn', () => {
  expect(turn([
    [1, 1, 0],
    [0, 0, 1],
    [1, 0, 0],
  ])).toEqual([
    [1, 0, 1],
    [0, 0, 1],
    [0, 1, 0],
  ]);
});

test('solution', () => {
  expect(solution([
    [0, 0, 0],
    [1, 0, 0],
    [0, 1, 1],
  ], [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ])).toBe(true);
});
