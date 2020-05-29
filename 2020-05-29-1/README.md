# 평균 구하기

## 이해

- 정수를 담고 있는 배열 arr의 평균 값을 return 하라.

## 계획

- arr의 원소들을 모두 더한다.
- 이 값을 arr.length로 나눈다.
- 결과 값을 double 타입으로 return 한다.

## 실행

```java
public class GettingAverage {
    public double solution(int[] arr) {
        double sum = 0;
        for (int number : arr) {
            sum += number;
        }

        return sum / arr.length;
    }
}
```

## 회고

- assertEquals의 double 타입은, delta 파라미터가 하나 더 필요하다.
