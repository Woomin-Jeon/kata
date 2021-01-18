const solution = (n) => {
  const trianglesToMake = getTrianglesToMake(n);
  const combinedTriangle = combineTriangles(trianglesToMake, 1)

  return combinedTriangle.flat();
};

const combineTriangles = (trianglesToMake, startNumber) => {
  if (trianglesToMake.length === 0) {
    return [];
  }

  const targetLength = trianglesToMake.shift();
  const targetTriangle = createTriangle(startNumber, targetLength);

  const childTriangle = combineTriangles(trianglesToMake, getEndNumber(startNumber, targetLength) + 1);

  for (let i = 0; i < childTriangle.length; i += 1) {
    const targetsLeftNumber = targetTriangle[i + 2][0];
    const targetsRightNumber = targetTriangle[i + 2][1];
    targetTriangle[i + 2] = [targetsLeftNumber, ...childTriangle[i], targetsRightNumber];
  }

  return targetTriangle;
}

const getTrianglesToMake = (n) => {
  const triangles = [];
  
  let length = n;

  while (length > 0) {
    triangles.push(length);
    length -= 3;
  }

  return triangles;
};

const createTriangle = (startNumber, n) => {
  const arr = Array(n).fill().map(v => []);

  const downEndNumber = startNumber + (n - 2);
  const leftEndNumber = downEndNumber + (n - 1);
  const upEndNumber = leftEndNumber + (n - 1);

  if (n === 1) {
    arr[0].push(startNumber);
    return arr;
  }

  let rowIndex = 0;

  for (let i = startNumber; i <= downEndNumber; i += 1) {
    arr[rowIndex].push(i);
    rowIndex += 1;
  }

  for (let i = downEndNumber + 1; i <= leftEndNumber; i += 1) {
    arr[rowIndex].push(i);
  }

  for (let i = leftEndNumber + 1; i <= upEndNumber; i += 1) {
    arr[rowIndex].push(i);
    rowIndex -= 1;
  }

  return arr;
};

const getEndNumber = (startNumber, n) => (startNumber - 1) + (n - 1) * 3;

test('getEndNumber', () => {
  expect(getEndNumber(1, 3)).toBe(6);
  expect(getEndNumber(3, 3)).toBe(8);
  expect(getEndNumber(1, 5)).toBe(12);
});

test('getTrianglesToMake', () => {
  expect(getTrianglesToMake(4)).toEqual([4, 1]);
  expect(getTrianglesToMake(5)).toEqual([5, 2]);
  expect(getTrianglesToMake(6)).toEqual([6, 3]);
  expect(getTrianglesToMake(7)).toEqual([7, 4, 1]);
});

test('createTriangle', () => {
  expect(createTriangle(5, 1)).toEqual([
        [5],
  ]);
  expect(createTriangle(1, 2)).toEqual([
        [1],
       [2, 3]
  ]);
  expect(createTriangle(16, 3)).toEqual([
        [16],
       [17, 21],
      [18, 19, 20],
  ]);
  expect(createTriangle(1, 4)).toEqual([
        [1],
       [2, 9],
      [3,    8],
     [4, 5, 6, 7],
  ]);
});

test('solution', () => {
  expect(solution(4)).toEqual([1, 2, 9, 3, 10, 8, 4, 5, 6, 7]);
  expect(solution(5)).toEqual([1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9]);
  expect(solution(6)).toEqual([1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11]);
});
