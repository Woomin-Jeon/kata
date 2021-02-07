const solution = (str1, str2) => {
  const subset1 = makeSubset(str1);
  const subset2 = makeSubset(str2);

  const filteredSubset1 = filterAlphabetOnly(subset1);
  const filteredSubset2 = filterAlphabetOnly(subset2);

  if (filteredSubset1.length === 0 && filteredSubset2.length === 0) {
    return 65536;
  }

  const intersectionCount = getIntersectionCount(filteredSubset1, filteredSubset2);
  const unionCount = filteredSubset1.length + filteredSubset2.length - intersectionCount;

  const jaccardSimilarity = intersectionCount / unionCount;

  return Math.floor(jaccardSimilarity * 65536);
};

const filterAlphabetOnly = (subset) => {
  return subset.filter(str => !str.match(/[^a-zA-Z]/));
};

const getIntersectionCount = (set1, set2) => {
  const newSet1 = [...set1];
  const newSet2 = [...set2];

  let count = 0;

  while (newSet1.length > 0) {
    const target = newSet1.pop();

    const sameValueIndex = newSet2.findIndex(v => v === target);
    
    if (sameValueIndex >= 0) {
      count += 1;
      newSet2.splice(sameValueIndex, 1);
    }
  }

  return count;
};

const makeSubset = (str) => {
  const subset = [];

  for (let i = 1; i < str.length; i += 1) {
    subset.push(`${str[i - 1]}${str[i]}`.toLowerCase());
  }

  return subset;
};

test('makeSubset', () => {
  expect(makeSubset('abcd')).toEqual(['ab', 'bc', 'cd']);
  expect(makeSubset('ab')).toEqual(['ab']);
});

test('getIntersectionCount', () => {
  expect(getIntersectionCount(['ab', 'ab', 'bc'], ['ab', 'ab'])).toBe(2);
  expect(getIntersectionCount(['ab', 'ab', 'bc'], ['bc', 'ab'])).toBe(2);
  expect(getIntersectionCount(['ab', 'ab', 'bc'], ['bc'])).toBe(1);
  expect(getIntersectionCount(['ab', 'ab', 'bc'], ['cd', 'ef'])).toBe(0);
});

test('filterAlphabetOnly', () => {
  expect(filterAlphabetOnly(['ab', 'bc', 'cd'])).toEqual(['ab', 'bc', 'cd']);
  expect(filterAlphabetOnly(['a+', 'bc', 'cd'])).toEqual(['bc', 'cd']);
  expect(filterAlphabetOnly(['a+', ' c', 'cd'])).toEqual(['cd']);
  expect(filterAlphabetOnly(['a+', ' c', '_d'])).toEqual([]);
});

test('solution', () => {
  expect(solution('FRANCE', 'french')).toBe(16384);
  expect(solution('handshake', 'shake hands')).toBe(65536);
  expect(solution('aa1+aa2', 'AAAA12')).toBe(43690);
  expect(solution('E=M*C^2', 'e=m*c^2')).toBe(65536);
});
