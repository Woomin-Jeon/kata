# [백준] 1, 2, 3 더하기 (#9095)

## 이해

- 정수 값 n이 주어질 때 이를 1, 2, 3의 합으로 나타내는 모든 경우의 수를 구하라.

## 계획

- 먼저 [1, 1, 1, 1, ..., 1] 부터 시작한다.
- for문을 통해 배열을 순회하면서 해당 index의 인접한 두 수가 2나 3으로 합쳐질 수 있다면 합친다.
- 합쳐졌다면 이 새로운 배열을 다시 재귀함수에 넣는다.

## 실행

```js
const solution = (n) => {
  const arr = Array(n).fill().map(v => 1);

  const answer = new Set();
  findNewCase(answer, arr);

  return answer.size;
};

const findNewCase = (answer, arr) => {
  answer.add(arr.join(''));

  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] + arr[i + 1] > 3) {
      continue;
    }

    const newArr = [...arr.slice(0, i), arr[i] + arr[i + 1], ...arr.slice(i + 2, arr.length)];
    findNewCase(answer, newArr);
  }
}

test('solution', () => {
  expect(solution(4)).toBe(7);
  expect(solution(7)).toBe(44);
  expect(solution(10)).toBe(274);
});
```

## 회고

- 처음에는 도대체 경우의 수를 어떻게 접근해야할 지 모르겠어서 콤비네이션도 써보려하고, 막막했는데 재귀로 돌리니까 쉽게 해결할 수 있었다.
- 특히 경우의 수 같은 문제는 내가 머리로 계산하려고 하기보다는, 즉 공식을 코드로 만드려고 하기보다는 그냥 하나하나 컴퓨터에게 일일히 계산시키는 방법이 유효한 듯 하다.
