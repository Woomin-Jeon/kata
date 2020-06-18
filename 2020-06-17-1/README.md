# Combination

알고리즘 문제를 풀다보니 콤비네이션을 구현해야하는 경우가 종종 있길래, 두고두고 쓰려고 JavaScript로 이번에 한번 구현해봤다.
`Update` 내가 구현한 기능은 효율이 너무 떨어져서 다른 분의 코드를 참고하여 다시 구현하였다.

```javascript
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

test('getCombinations', () => {
  expect(getCombinations([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  expect(getCombinations([1, 2, 3], 2)).toEqual([[1, 2], [1, 3], [2, 3]]);
  expect(getCombinations([1, 2, 3], 3)).toEqual([[1, 2, 3]]);

  expect(getCombinations(Array(100).fill(1).map((v, i) => v + i), 3).length).toBe(161700);
});
```
