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
