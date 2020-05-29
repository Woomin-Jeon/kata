# 행렬의 덧셈

## 이해

- 2차원 배열 두 개가 주어질 때, 둘을 더하여 return 하라.

## 계획

- for 문을 통해 순회하면서 더해서 return 한다.

## 실행

```java
public class SumOfMatrix {
    public int[][] solution(int[][] arr1, int[][] arr2) {
        int row = arr1.length;
        int column = arr1[0].length;
        int[][] result = new int[row][column];

        for (int i = 0; i < row; i += 1) {
            for (int j = 0; j < column; j += 1) {
                result[i][j] = arr1[i][j] + arr2[i][j];
            }
        }

        return result;
    }
}
```

## 회고

- for문을 이용하니 쉽게 풀 수 있었다. 아직 고차함수를 잘 몰라서 아쉽다.
