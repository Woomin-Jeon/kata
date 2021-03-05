const solution = (relations) => {
  const indexes = Array(relations[0].length).fill().map((v, i) => i);
  const indexCases = getCases(indexes);

  const uniqueKeyCases = filterByUniqueness(indexCases, relations);
  const uniqueAndMinimalKeyCases = filterByMinimality(uniqueKeyCases);

  return uniqueAndMinimalKeyCases.length;
};

const getCases = (arr) => {
  const cases = Array(2 ** arr.length - 1).fill()
    .map((v, i) => i + 1)
    .map(v => v.toString(2).padStart(arr.length, 0))

  return cases.map(c => 
    [...c].flatMap((v, i) => v === '1' ? [arr[i]] : []));
};

const filterByUniqueness = (indexCases, relations) =>
  indexCases.flatMap(indexCase => {
    const keys = relations.map(relation =>
      indexCase.reduce((acc, index) => acc + relation[index], ''));

    return keys.length === new Set(keys).size ? [indexCase] : [];
  });

const filterByMinimality = (set) => {
  set.filter(v => {
    set = set.filter(e => e === v ? true : !isSubset(v, e));
  });

  return set;
};

const isSubset = (setA, setB) => setA.every(v => setB.includes(v));

test('isSubset', () => {
  expect(isSubset([0], [0, 1])).toBe(true);
  expect(isSubset([0, 1], [0, 1])).toBe(true);
  expect(isSubset([0, 2], [0, 1, 2])).toBe(true);
  expect(isSubset([0], [1])).toBe(false);
  expect(isSubset([0], [1, 2])).toBe(false);
  expect(isSubset([0, 1], [0, 2])).toBe(false);
});

test('filterByMinimality', () => {
  expect(filterByMinimality([
    [0], [0, 1], [0, 2], [1, 2], [1, 2, 3]
  ])).toEqual([
    [0], [1, 2]
  ]);
});

test('filterByUniqueness', () => {
  expect(filterByUniqueness([
    [0], [1], [2], [0, 1], [0, 2], [1, 2], [0, 1, 2]
  ], [
    ["1", "a", "B"],
    ["2", "b", "B"],
    ["3", "b", "C"],
  ])).toEqual([
    [0], [0, 1], [0, 2], [1, 2], [0, 1, 2]
  ]);
});

test('getCases', () => {
  expect(getCases([1, 2])).toEqual([
    [2], [1], [1, 2]
  ]);
  expect(getCases([1, 2, 3])).toEqual([
    [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]
  ]);
});

test('solution', () => {
  expect(solution([
    ["100", "ryan",   "music",    "2"],
    ["200", "apeach", "math",     "2"],
    ["300", "tube",   "computer", "3"],
    ["400", "con",    "computer", "4"],
    ["500", "muzi",   "music",    "3"],
    ["600", "apeach", "music",    "2"],
  ])).toBe(2);
});
