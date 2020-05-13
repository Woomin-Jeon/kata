const solution = (brown, yellow) => {
  const aliquots = getAliquot(yellow);
  const pairs = makePair(aliquots);
  const answer = pairs
    .filter(pair => (pair[0] * 2) + (pair[1] * 2) + 4 === brown ? true : false)[0]
    .map(v => v + 2);

  answer.sort((a, b) => b - a);

  return answer;
};

const getAliquot = (number) => {
  const aliquots = [];
  
  for (let i = 0; i <= number; i += 1) {
    if (number % i === 0) {
      aliquots.push(i);
    }
  }

  return aliquots;
};

const makePair = (arr) => {
  const pairs = [];

  for (let i = 0; i < arr.length / 2; i += 1) {
    pairs.push([arr[i], arr[arr.length - 1 - i]]);
  }

  return pairs;
}

test('makePair', () => {
  expect(makePair([1, 2, 3, 4, 6, 12])).toEqual([[1, 12], [2, 6], [3, 4]]);
  expect(makePair([1, 2, 4, 5, 10, 20])).toEqual([[1, 20], [2, 10], [4, 5]]);
  expect(makePair([1, 5, 25])).toEqual([[1, 25], [5, 5]]);
});

test('getAliquot', () => {
  expect(getAliquot(12)).toEqual([1, 2, 3, 4, 6, 12]);
  expect(getAliquot(20)).toEqual([1, 2, 4, 5, 10, 20]);
  expect(getAliquot(25)).toEqual([1, 5, 25]);
});

test('solution', () => {
  expect(solution(10, 2)).toEqual([4, 3]);
  expect(solution(8, 1)).toEqual([3, 3]);
});
