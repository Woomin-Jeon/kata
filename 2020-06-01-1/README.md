# K번째 수

## 이해

- array의 i번째부터 j번째까지 자른 후 정렬 했을 때, k번째에 있는 수를 구한다.
- 이때, "번째"는 index가 아니라 진짜 그냥 몇 번째에 위치해 있는지이다.
- commands는 2차원 배열이고, 원소는 [i, j, k]로 구성되어있다.

## 계획

- commands를 순회하면서 [i, j, k]에 따라서 array에서 원하는 값을 추출한다.
- 이를 result라는 ArrayList에 넣는다.

## 실행

```java
public class KthNumber {
    public int[] solution (int[] array, int[][] commands) {
        ArrayList<Integer> result = new ArrayList<>();

        for (int i = 0; i < commands.length; i += 1) {
            int[] command = commands[i];
            int startIndex = command[0] - 1;
            int endIndex = command[1];
            int kIndex = command[2] - 1;

            int[] copy = Arrays.copyOfRange(array, startIndex, endIndex);

            Arrays.sort(copy);

            result.add(copy[kIndex]);
        }

        return result.stream().mapToInt(v -> v.intValue()).toArray();
    }
}
```

## 회고

- 배열을 자르는 방법에 대해 배울 수 있어서 좋았다.
