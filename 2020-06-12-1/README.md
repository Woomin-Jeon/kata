# 행렬의 곱셈

## 이해

- 2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 return 하라.
- 이때 arr1과 arr2는 배열이 아니라 행렬이다. 행렬의 곱셈을 수행해야 한다.
- 행렬의 곱셉하는 방법은 아래와 같다.  
  a11, a12 | b11, b12 || (a11*b11)+(a12*b21), (a11*b12)+(a12*b22)
  a21, a22 | b21, b22 || (a21*b11)+(a21*b21), (a21*b12)+(a22*b22)

## 계획

- 그냥 행렬의 곱셈 하면 된다.

## 실행

```javascript
const solution = (arr1, arr2) => {
  const row = arr1.length;
  const column = arr2[0].length;
  const calculationCount = arr2.length;
  const result = Array(row).fill(0).map(v => Array(column).fill(0));

  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < column; j += 1) {
      for (let k = 0; k < calculationCount; k += 1) {
        result[i][j] += arr1[i][k] * arr2[k][j]
      }
    }
  }

  return result;
};

test('solution', () => {
  expect(solution([
    [1, 4],
    [3, 2],
    [4, 1],
  ],[
    [3, 3],
    [3, 3],
  ])).toEqual([
    [15, 15],
    [15, 15],
    [15, 15],
  ]);
  expect(solution([
    [2, 3, 2],
    [4, 2, 4],
    [3, 1, 4],
  ],[
    [5, 4, 3],
    [2, 4, 1],
    [3, 1, 1],
  ])).toEqual([
    [22, 22, 11],
    [36, 28, 18],
    [29, 20, 14],
  ]);
});
```

## 회고

- 와 진짜 어려웠다. for문 세 개를 사용해야 하는 문제라 가동할 수 있는 뇌를 총 동원해서 풀었다. 규칙성 찾는 게 정말 쉽지 않았다.
