# [백준] 숫자 정사각형(#1051)

## 이해

- N * M인 직사각형이 2차원 배열로 주어질 때, 이 직사각형 안에서 꼭짓점에 쓰여진 수가 모두 같은 가장 큰 정사각형을 찾아서, 그 크기를 return 하라.

## 계획

- for문으로 순회하면서 정사각형을 찾는다.
- 정사각형을 찾으면 그 크기를 answer라는 배열에 넣고, 정사각형 탐색이 종료되면 answer의 원소 중 가장 큰 수를 return 한다.

## 실행

```js
const solution = (rectangle) => {
  const answer = [1];

  rectangle.forEach((line, y) => {
    line.forEach((target, x) => {
      let d = 1;
      while (rectangle[y + d]) {
        const point1 = rectangle[y][x + d];
        const point2 = rectangle[y + d][x];
        const point3 = rectangle[y + d][x + d];

        if (target === point1 && target === point2 && target === point3) {
          answer.push((d + 1) ** 2);
        }

        d += 1;
      }
    });
  });
  
  return Math.max(...answer);
};

test('solution', () => {
  expect(solution([
    [4, 4, 3, 3 ,3],
    [4, 4, 5, 0 ,5],
    [2, 2, 1, 0 ,0],
    [2, 2, 5, 0 ,5],
  ])).toBe(9);
  expect(solution([
    [4, 4, 3, 4 ,4],
    [4, 1, 5, 3 ,5],
    [1, 2, 1, 0 ,0],
    [4, 3, 1, 3 ,5],
    [1, 2, 1, 4 ,1],
  ])).toBe(9);
  expect(solution([
    [2, 1],
    [2, 1],
    [1, 1],
  ])).toBe(1);
});
```

## 회고

- 처음 백준으로 해결해본 문제인데 JavaScript로 백준 풀기엔 플랫폼이 너무 힘든 것 같다...
- 문제 자체는 어렵지 않았다.
