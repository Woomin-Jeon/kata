# 가운데 글자 가져오기

## 이해

- 단어 s의 가운데 글자를 return 하라.
- 단, 단어의 길이가 짝수라면 가운데 두 글자를 return 해야 한다.

## 계획

- copyOfRange를 써서 풀어봐야겠다.

## 실행

```java
public class CenterCharacter {
    public String solution (String str) {
        String[] strArr = str.split("");
        double centerIndex = Math.floor(str.length()/2);

        return str.length() % 2 == 1
                ? strArr[(int)centerIndex]
                : strArr[(int)centerIndex - 1] + strArr[(int)centerIndex];
    }
}
```

## 회고

- substring이라는 메서드에 대해서 공부해봐야겠다.
