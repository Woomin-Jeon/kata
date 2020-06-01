# 같은 숫자는 싫어

## 이해

- 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거한다.
- 그런데 중복제거처럼 모두 지우는 게 아니라 연속되는 애들만 지우는 것이므로 주의해야 한다.
- 배열 arr이 주어질 때 연속되는 숫자를 제거하고 남은 배열을 return 하라.

## 계획

- ArrayList answer를 하나 만든다.
- arr을 순회하면서 answer에 숫자를 넣는데 만약 arr[i]와 arr[i - 1]이랑 같다면 그냥 넘어간다.
- ArrayList를 Array로 변환하여 return 한다.

## 실행

```java
public class IHateSameNumber {
    public int[] solution (int[] arr) {
        ArrayList<Integer> answer = new ArrayList<>();

        Arrays.stream(arr).reduce(10, (a, b) -> checkDuplication(a, b, answer));
        return answer.stream().mapToInt(v -> v).toArray();
    }

    public int checkDuplication (int pre, int cur, ArrayList<Integer> answer) {
        if (pre == cur) {
            return pre;
        }
        answer.add(cur);
        return cur;
    }
}
```

## 회고

- 처음에는 그냥 for문을 써서 풀었었는데, reduce가 딱 생각나서 reduce를 사용하여 풀어보았다.
- 풀이가 마음에 든다. 뿌듯
