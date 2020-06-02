# 멀쩡한 사각형

## 이해

- 직사각형이 주어지는데, 가로가 Wcm 세로가 Hcm이다.
- 이 직사각형 안에 1cm x 1cm 미니 정사각형이 (W x H)개가 존재한다.
- 이 직사각형의 대각선 하나가 지나는 미니 정사각형은 제외했을 때 남은 미니 정사각형의 개수를 return 하라.

## 계획

- 규칙을 찾아보니, 지워지는 미니 정사각형의 개수는 w + h - (w와 h의 최대공약수)였다.
- 이를 토대로 구현해본다.

## 실행

```javascript
const solution = (W, H) => {
  return W * H - (W + H - getGCD(W, H));
};

const getGCD = (x, y) => {
  const bigNumber = x >= y ? x : y;
  const smallNumber = x < y ? x : y;

  for (let i = smallNumber; i > 0; i -= 1) {
    if (bigNumber % i === 0 && smallNumber % i === 0) {
      return i;
    }
  }
};

test('getGCD',  () => {
  expect(getGCD(8, 12)).toBe(4);
  expect(getGCD(10, 15)).toBe(5);
});

test('solution', () => {
  expect(solution(8, 12)).toBe(80);
});
```

## 회고

- 이건 뭐 알고리즘 문제라기보다는 수학문제...
