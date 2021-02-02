const solution = (info, query) => {
  const searchGroup = {};
  
  info.forEach(data => {
    const [language, position, experience, soulFood, codingTestScore] = data.split(' ');
    
    const ableSearchGroups = getAbleSearchGroups(language, position, experience, soulFood);
    ableSearchGroups.forEach(groupName => {
      if (searchGroup[groupName]) {
        searchGroup[groupName].push(Number(codingTestScore));
        return;
      }

      searchGroup[groupName] = [Number(codingTestScore)];
    });
  });

  Object.values(searchGroup).forEach(v => v.sort((a, b) => a - b));

  const answer = query.map(data => {
    const [language, position, experience, soulFood, codingTestScore]
      = data.replace(/and /g, "").split(' ');
  
    const targets = searchGroup[`${language},${position},${experience},${soulFood}`] || [];
    const lowerIndex = lowerBoundBinarySearch(targets, codingTestScore);

    return targets.length - lowerIndex - 1;
  });

  return answer;
};

const lowerBoundBinarySearch = (sortedArray, targetNumber) => {
  let max = sortedArray.length;
  let min = 0;

  while (min <= max) {
    const mid = Math.floor((max + min) / 2);

    if (sortedArray[mid] < targetNumber) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  if (sortedArray[min] !== targetNumber) {
    return min - 1;
  }

  return min;
}

const getAbleSearchGroups = (language, position, experience, soulFood) => {
  const args = [language, position, experience, soulFood];
  const ableCases = Array(2 ** 4).fill().map((v, i) => (i).toString(2).padStart(4, 0));
  
  return ableCases.map((ableCase) => {
    const arr = ableCase.split('');
    return arr.map((v, i) => v === '1' ? args[i] : '-').join(',');
  });
};

test('lowerBoundBinarySearch', () => {
  expect(lowerBoundBinarySearch([1, 3, 4, 7, 9, 10, 14], 6)).toBe(2);
  expect(lowerBoundBinarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  expect(lowerBoundBinarySearch([1, 2, 4, 5], 3)).toBe(1);
  expect(lowerBoundBinarySearch([1, 2, 4, 5], 2)).toBe(1);
});

test('getAbleSearchGroups', () => {
  expect(getAbleSearchGroups('java', 'frontend', 'junior', 'chicken'))
    .toEqual([
      '-,-,-,-',
      '-,-,-,chicken',
      '-,-,junior,-',
      '-,-,junior,chicken',
      '-,frontend,-,-',
      '-,frontend,-,chicken',
      '-,frontend,junior,-',
      '-,frontend,junior,chicken',
      'java,-,-,-',
      'java,-,-,chicken',
      'java,-,junior,-',
      'java,-,junior,chicken',
      'java,frontend,-,-',
      'java,frontend,-,chicken',
      'java,frontend,junior,-',
      'java,frontend,junior,chicken',
    ]);
});

test('solution', () => {
  expect(solution([
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50",
  ], [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150"
  ])).toEqual([1, 1, 1, 1, 2, 4]);
});
