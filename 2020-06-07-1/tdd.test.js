const solution = (numbers) => {
  const primeNumbers = getPrimeNumbers(10 ** numbers.length);
  const paperNumbers = numbers.split("").map(v => Number(v));

  let answer = 0;
  primeNumbers.forEach(v => {    
    if (isCorrectWithPaperNumber(paperNumbers, v)) {        
      answer += 1;
    }
  });

  return answer;
};

const isCorrectWithPaperNumber = (paperNumbers, target) => {
  const targetArr = target.toString().split("").map(v => Number(v));
  const copiedPaperNumbers = paperNumbers.slice();

  while(true) {
    const paperNumber = copiedPaperNumbers.shift();
    
    if (targetArr.length === 0) {
      return true;
    }

    if (targetArr.includes(paperNumber)) {
      const index = targetArr.findIndex(v => v === paperNumber);
      targetArr.splice(index, 1);
      continue;
    }

    if (copiedPaperNumbers.length === 0) {
      return false;
    }
  }
}

const getPrimeNumbers = (n) => {
  let numbers = Array(n + 1).fill(0).map((v, i) => v = v + i);

  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (numbers[i] === 0) {
      continue;
    }

    for (let j = i + i; j < n + 1; j += i) {
      numbers[j] = 0;
    }
  }

  return numbers.filter(v => v !== 0).slice(1, numbers.length);
}

test('isCorrectWithPaperNumber', () => {
  expect(isCorrectWithPaperNumber([1, 7], 7)).toBe(true);
  expect(isCorrectWithPaperNumber([1, 7], 11)).toBe(false);
  expect(isCorrectWithPaperNumber([1, 3, 5], 13)).toBe(true);
  expect(isCorrectWithPaperNumber([1, 3, 5], 23)).toBe(false);
  expect(isCorrectWithPaperNumber([1, 1, 5], 511)).toBe(true);
  expect(isCorrectWithPaperNumber([1, 0, 0], 10)).toBe(true);  
  expect(isCorrectWithPaperNumber([9, 9, 0], 909)).toBe(true);
  expect(isCorrectWithPaperNumber([7, 8, 4, 3], 37)).toBe(true);
});

test('getPrimeNumbers', () => {
  expect(getPrimeNumbers(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  expect(getPrimeNumbers(10)).toEqual([2, 3, 5, 7]);
});

test('solution', () => {
  expect(solution("17")).toBe(3);
  expect(solution("7843")).toBe(12);
});
