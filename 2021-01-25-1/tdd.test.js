const solution = (s) => {
  const subArray = parseIntoArray(s).sort((a, b) => a.length - b.length);
  
  return subArray.reduce((acc, cur) => {
    const differentNumber = searchDifferentNumber(acc, cur);
    return [...acc, differentNumber];
  }, []);
};

const parseIntoArray = (str) =>
  str.replace(/{{|}}/g, '').split('},{').map(v => v.split(',').map(e => Number(e)));

const searchDifferentNumber = (arr1, arr2) => {
  const totalOfArr1 = arr1.reduce((acc, cur) => acc + cur, 0);
  const totalOfArr2 = arr2.reduce((acc, cur) => acc + cur, 0);

  return totalOfArr2 - totalOfArr1;
};

test('searchDifferentNumber', () => {
  expect(searchDifferentNumber([2], [2, 1])).toBe(1);
  expect(searchDifferentNumber([2, 1], [3, 1, 2])).toBe(3);
});

test('parseIntoArray', () => {
  expect(parseIntoArray("{{2},{2,1},{2,1,3}}")).toEqual([[2], [2, 1], [2, 1, 3]]);
  expect(parseIntoArray("{{2,1,3}}")).toEqual([[2, 1, 3]]);
});

test('solution', () => {
  expect(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")).toEqual([2, 1, 3, 4]);
  expect(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")).toEqual([2, 1, 3, 4]);
});
