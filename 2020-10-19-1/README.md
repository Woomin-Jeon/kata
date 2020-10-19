# [백준] N과 M (4) (#15652)

## 이해

- 1부터 N까지 자연수 중에서 M개를 고른 수열을 만들 건데,
- 앞의 숫자보다 뒤의 숫자가 같거나 커야한다.
- 즉, [1, 1, 2, 3, 5, 6, 6, 7, ...] 과 같이 오름차순이어야 한다.
- 이 때, N과 M을 이용해서 만들 수 있는 수열의 개수를 return 하라.

## 계획

- pointer가 가리키는 index의 숫자가 N이 되면 앞의 숫자를 +1(headValue)해주고, 뒤에 존재하는 모든 숫자들은 앞의 숫자랑 동일하게 다 만들어준다.
- 만약 앞의 숫자가 이미 N이라면, 한 칸 더 앞으로 가서 그 숫자를 +1 해주고 뒤에 존재하는 모든 숫자들은 앞의 숫자랑 동일하게 다 만들어준다.
- N보다 작은 숫자가 나올 때까지 앞으로 이동하면서 탐색한 뒤 해당 인덱스를 반환하는 함수는 searchNextAbleToIncreaseIndex이며, 뒤에 존재하는 모든 숫자들을 headValue와 동일하게 만들어주는 함수가 flatFollowingNumbers 함수이다.

## 실행

```js
const solution = (N, M) => {
  const answer = [];
  const arr = Array(M).fill().map(v => 1);
  
  let pointer = arr.length - 1;
  while (true) {
    answer.push(arr.slice());

    if (arr[0] === N) {
      return answer;
    }
  
    if (arr[pointer] === N) {
      pointer = searchNextAbleToIncreaseIndex(arr, pointer, N)
      arr[pointer] += 1;

      flatFollowingNumbers(arr, pointer)

      pointer = arr.length - 1;
      continue;
    }

    arr[pointer] += 1;
  }
};

const flatFollowingNumbers = (arr, pointer) => {
  const headValue = arr[pointer];

  for (let i = pointer; i < arr.length; i += 1) {
    arr[i] = headValue;
  }
}

const searchNextAbleToIncreaseIndex = (arr, pointer, N) => {
  for (let i = pointer - 1; i >= 0; i -= 1) {
    if (arr[i] >= N) {
      continue;
    }

    return i;
  }
}

test('solution', () => {
  expect(solution(3, 1)).toEqual([
    [1],
    [2],
    [3],
  ]);
  expect(solution(4, 2)).toEqual([
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 2],
    [2, 3],
    [2, 4],
    [3, 3],
    [3, 4],
    [4, 4],
  ]);
  expect(solution(3, 3)).toEqual([
    [1, 1, 1],
    [1, 1, 2],
    [1, 1, 3],
    [1, 2, 2],
    [1, 2, 3],
    [1, 3, 3],
    [2, 2, 2],
    [2, 2, 3],
    [2, 3, 3],
    [3, 3, 3],
  ]);
});
```

## 회고

- 어려웠다.
- 뭔가 생각 자체는 어렵지 않았는데 이를 구현으로 옮기는 과정이 머리 터질 뻔 했다.
- 요즘 이해 - 계획을 잘 안적고 바로바로 급하게 코딩에 들어가는데, 이것보다는 찬찬히 이해 - 계획 - 실행의 순서로 하는 방법이 더 빠를 것 같다는 생각이 든다. 다시 원래 했던 방식대로 해야겠다.
