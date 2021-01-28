const solution = (orders, course) => {
  const answer = course.flatMap(count => {
    const candidates = orders
      .flatMap(order => getSubstringByCount(order, count))
      .filter(removeDuplication)
      .map(addCountProperty(orders))
      .filter(removeCandidatesLessThanCountTwo);

    const maxCount = Math.max(...candidates.map(candidate => candidate.count));

    return candidates.filter(candidate => candidate.count === maxCount);
  });

  return answer.map(candidate => candidate.value).sort();
};

const getSubstringByCount = (str, count) => {
  const cases = Array(2 ** str.length).fill().map((v, i) => i.toString(2).padStart(str.length, 0));
  const ableCases = cases.filter(c => c.split('').filter(v => v === '1').length === count);

  return ableCases.reduce((acc, cur) => {
    const subArray = [...cur].flatMap((v, i) => v === '1' ? str[i] : []);
    return [...acc, subArray.sort().join('')];
  }, []);
};

const removeDuplication = (value, index, thisArr) => thisArr.indexOf(value) === index;

const addCountProperty = (orders) => (candidate) => {
  const time = orders.filter(order => isContained(candidate, order)).length;
  return { value: candidate, count: time };
}

const removeCandidatesLessThanCountTwo = candidate => candidate.count > 1

const isContained = (sub, target) => [...sub].every(v => target.includes(v));

test('getSubstringByCount', () => {
  expect(getSubstringByCount([1, 2, 3], 1)).toEqual(['3', '2', '1']);
  expect(getSubstringByCount([1, 2, 3], 2)).toEqual(['23', '13', '12']);
  expect(getSubstringByCount([1, 2, 3], 3)).toEqual(['123']);
  expect(getSubstringByCount([1, 2, 3], 4)).toEqual([]);
  expect(getSubstringByCount([1, 2, 3, 4, 5], 4)).toEqual(['2345', '1345', '1245', '1235', '1234']);
});

test('isContained', () => {
  expect(isContained([1, 3], [1, 2, 3])).toBe(true);
  expect(isContained([1, 4], [1, 2, 3])).toBe(false);
  expect(isContained([3], [1, 2, 3])).toBe(true);
  expect(isContained([4], [1, 2, 3])).toBe(false);
});

test('solution', () => {
  expect(solution(
    ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"],
    [2, 3, 4]
  )).toEqual(["AC", "ACDE", "BCFG", "CDE"]);
  expect(solution(
    ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"],
    [2, 3, 5]
  )).toEqual(["ACD", "AD", "ADE", "CD", "XYZ"]);
  expect(solution(
    ["XYZ", "XWY", "WXA"],
    [2, 3, 4]
  )).toEqual(["WX", "XY"]);
});
