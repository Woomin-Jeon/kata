const solution = (nums) => 
  getCombinations(nums, 3).map(v => v.reduce((acc, cur) => acc +cur, 0)).filter(v => isPrime(v)).length;

const getCombinations = (arr, num) => {
  const combinations = [];
  const pickedIndexes = [];
  const used = Array(arr.length).fill(false);

  combRecursive(combinations, pickedIndexes, used, arr, num);

  return combinations;
}

const combRecursive = (combinations, pickedIndexes, used, arr, num) => {
  if (pickedIndexes.length === num) {
    const elements = [];

    pickedIndexes.forEach(index => {
      elements.push(arr[index]);
    });

    combinations.push(elements);

    return;
  }
  
  const start = pickedIndexes[pickedIndexes.length - 1] + 1 || 0;
  
  for (let i = start; i < arr.length; i += 1) {
    if (i === 0 || arr[i] !== arr[i - 1] || used[i - 1]) {
      pickedIndexes.push(i);
      used[i] = true;

      combRecursive(combinations, pickedIndexes, used, arr, num);

      pickedIndexes.pop();
      used[i] = false;
    }
  }
}

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i == 0) {
      return false;
    }
  }

  return true;
}

test('getCombinations', () => {
  expect(getCombinations([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  expect(getCombinations([1, 2, 3], 2)).toEqual([[1, 2], [1, 3], [2, 3]]);
  expect(getCombinations([1, 2, 3], 3)).toEqual([[1, 2, 3]]);

  expect(getCombinations(Array(100).fill(1).map((v, i) => v + i), 3).length).toBe(161700);
});

test('solution', () => {
  expect(solution([1, 2, 3, 4])).toBe(1);
  expect(solution([1, 2, 7, 6, 4])).toBe(4);
});
