# 시저 암호

## 이해

- 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저암호라고 한다.
- z에서 밀리면 a로 다시 돌아가서 시작한다.
- 문자열 s와 거리 n을 입력받아서 s를 n만큼 민 암호문을 return 하라.

## 계획

- 문자열을 배열로 자른다.
- 배열을 순회하면서 한칸 씩 민다. 아마 +1을 하면 알아서 한 칸 씩 밀릴 것이다.
- 만약 z라면 a부터 다시 시작하도록 설정해준다.

## 실행

```java
public class CaesarCipher {
    public String solution (String target, int n) {
        String result = "";

        for (int i = 0; i < target.length(); i += 1) {
            char ch = target.charAt(i);

            if ((int)ch == 32) {
                result += " ";
                continue;
            }

            ch = Character.isLowerCase(ch)
                    ? (char) ((ch - 'a' + n) % 26 + 'a')
                    : (char) ((ch - 'A' + n) % 26 + 'A');

            result += ch;
        }

        return result;
    }
}
```

## 회고

- charAt 메서드를 이용해서 String에서 char를 추출할 수 있다는 것을 알게되었다.
