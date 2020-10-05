# [백준] 회전하는 큐 (#1021)

## 이해

- 큐는 왼쪽으로 이동하는 것과, 오른쪽으로 이동하는 동작을 수행할 수 있다.
- 이렇게 왼쪽으로, 오른쪽으로 이동하다가 큐의 첫번째 값이 원하는 숫자이면 꺼낼 수 있다.
- 원하는 숫자가 주어질 때, 이 숫자들을 모두 꺼내는 데 필요한 왼쪽 및 오른쪽 이동의 최소 횟수를 return 하라.

## 계획

- 각 숫자에 대해서 왼쪽으로 이동해서 꺼내는 것과, 오른쪽으로 이동해서 꺼내는 것 중 필요한 횟수가 적은 방법을 선택한다.
- 이렇게 나온 횟수들을 모두 더해서 return 한다.

## 실행

```js
const solution = (length, time, targets) => {
  let answer = 0;
  let numbers = Array(length).fill().map((_, i) => i + 1);

  targets.forEach(target => {
    const leftMoving = getMoveCount(moveLeft, numbers, target);
    const rightMoving = getMoveCount(moveRight, numbers, target);

    const smallerMoving = leftMoving.time < rightMoving.time ? leftMoving : rightMoving;

    numbers = smallerMoving.arr;
    numbers.shift();
    answer += smallerMoving.time;
  });

  return answer;
};

const getMoveCount = (moveMethod, numbers, target) => {
  let time = 0;
  let arr = numbers.slice();

  while (true) {
    if (arr[0] === target) {
      return { time, arr };
    }

    arr = moveMethod(arr);
    time += 1;
  }
};

const moveRight = (arr) => {
  return [arr[arr.length - 1], ...arr.slice(0, arr.length - 1)];
};

const moveLeft = (arr) => {
  return [...arr.slice(1, arr.length), arr[0]];
};

test('getMoveCount', () => {
  const arr = [1, 2, 3, 4, 5, 6];
  expect(getMoveCount(moveLeft, arr, 3).time).toBe(2);
  expect(getMoveCount(moveRight, arr, 3).time).toBe(4);
});

test('moveLeft', () => {
  expect(moveLeft([1, 2, 3])).toEqual([2, 3, 1]);
})

test('moveRight', () => {
  expect(moveRight([1, 2, 3])).toEqual([3, 1, 2]);
});

test('solution', () => {
  expect(solution(10, 3, [2, 9, 5])).toBe(8);
  expect(solution(10, 3, [1, 2, 3])).toBe(0);
});
```

## 회고

- let을 너무 많이 사용한 것 같아 아쉽다.
- 이런 문제가 그리디 유형이라고 불리는구나
