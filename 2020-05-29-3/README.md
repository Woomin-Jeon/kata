# 짝수와 홀수

## 이해

- 정수 num이 짝수이면 "Even"을, 홀수이면 "Odd"를 return 하라.

## 계획

- num을 2로 나누어서 나머지가 1이면 "Odd", 0이면 "Even"을 return 한다.

## 실행

```java
public class OddAndEven {
    public String solution(int num) {
        return num % 2 == 0 ? "Even" : "Odd";
    }
}
```

## 회고

- 다행이도 쉬웠다.
