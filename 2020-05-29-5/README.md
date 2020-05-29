# 자연수 뒤집어 배열로 만들기

## 이해

- 자연수 n을 뒤집어서 각자리 숫자를 원소로 갖는 배열 형태로 return 한다.

## 계획

- 먼저 n을 문자열로 변환한다.
- 문자열을 split으로 배열로 바꾼다.
- 배열 안의 원소들을 숫자로 바꾼다.
- 뒤집어서 return 한다.

## 실행

```java
public class arrayReverse {
    public int[] solution (long n) {
        String str = String.valueOf(n);
        String[] arr = str.split("");

        int[] numberArr = Stream.of(arr).mapToInt(v -> Integer.parseInt(v)).toArray();

        int[] reversedNumberArr = new int[numberArr.length];

        for (int i = 0; i < numberArr.length; i += 1) {
            reversedNumberArr[i] = numberArr[numberArr.length - 1 - i];
        }

        return reversedNumberArr;
    }
}
```

## 회고

- 배열 안의 character를 int로 바꾸는 게 이렇게 어려울 줄은 몰랐다.
- Java는 정말 메서드가 무궁무진 한 것 같다.
