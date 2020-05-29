# 하샤드 수

## 이해

- 하샤드 수란, 정수 n이 n의 자릿수들의 합으로 나누어지는 수를 말한다.
- 이 때, 정수가 주어질 때, 이 수가 하샤드 수인지 아닌지 boolean으로 return 하라.

## 계획

- 먼저 정수 n을 문자열로 변경한다.
- 그리고 이 문자열을 split으로 배열로 만든다.
- 그리고 배열의 원소들을 정수형으로 변경한다.
- 배열의 원소들을 모두 더한다.
- 이 더한 값으로 정수 n이 나누어지는지 판별한 뒤 return 한다.

## 실행

```java
public class HarshadNumber {
    public boolean solution(int n) {
        String str = String.valueOf(n);
        String[] arr = str.split("");
        int[] intArr = new int[arr.length];

        for (int i = 0; i < arr.length; i += 1) {
            intArr[i] = Integer.parseInt(arr[i]);
        }

        int sum = 0;
        for (int item : intArr) {
            sum += item;
        }

        return n % sum == 0;
    }
}
```

## 회고

- Java로 짜보니까 정말 힘들다...
- 아직 모르는 게 너무 많은 것 같다.
