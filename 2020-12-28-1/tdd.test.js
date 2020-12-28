const solution = (stringNumber) => {
  const numbers = stringNumber.split('');
  const ableNumbers = getAbleNumberCombination(numbers);
  const primeNumbers = ableNumbers.map(v => Number(v)).filter(isPrimeNumber);

  return new Set(primeNumbers).size;
};

const getAbleNumberCombination = (numbers) => {
  const result = [];
  const bfsQueue = numbers.map((number, index, thisArr) => { 
    const value = number;
    const ables = getAbles(index, thisArr);

    return { value, ables };
  });

  while (true) {
    const target = bfsQueue.shift();

    if (!target) {
      return result;
    }

    result.push(target.value);

    target.ables.forEach((able, index, thisArr) => {
      const value = target.value + able;
      const ables = getAbles(index, thisArr);
      
      bfsQueue.push({ value, ables });
    });
  }
}

const isPrimeNumber = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const getAbles = (index, numbers) => {
  const copy = [...numbers];
  copy.splice(index, 1);

  return copy;
}

test('getAbles', () => {
  expect(getAbles(0, [1, 2, 3])).toEqual([2, 3]);
  expect(getAbles(1, [1, 2, 3])).toEqual([1, 3]);
  expect(getAbles(2, [1, 2, 3])).toEqual([1, 2]);
})

test('isPrimeNumber', () => {
  expect(isPrimeNumber(1)).toBe(false);
  expect(isPrimeNumber(3)).toBe(true);
  expect(isPrimeNumber(7)).toBe(true);
  expect(isPrimeNumber(10)).toBe(false);
  expect(isPrimeNumber(11)).toBe(true);
})

test('getAbleNumberCombination', () => {
  expect(getAbleNumberCombination(['1', '2'])).toEqual(['1', '2', '12', '21']);
  expect(getAbleNumberCombination(['1', '2', '3'])).toEqual([
    '1', '2', '3', '12', '13', '21', '23', '31', '32', '123', '132', '213', '231', '312', '321'
  ]);
})

test('solution', () => {
  expect(solution("17")).toBe(3);
  expect(solution("011")).toBe(2);
});
