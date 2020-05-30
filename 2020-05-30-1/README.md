# 모의고사

## 이해

- 1번 수포자가 찍는 방식: 12345 12345 12345 ...
- 2번 수포자가 찍는 방식: 21 23 24 25 21 23 24 25 ...
- 3번 수포자가 찍는 방식: 33 11 22 44 55 33 11 22 44 55 ...
- 1번부터 마지막 문제까지 정답이 순서대로 들은 배열 answers가 주어질 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하라.
- 만약 높은 점수의 사람이 여럿일 경우 오름차순으로 정렬한 배열로 return 한다.

## 계획

- 1번, 2번, 3번 수포자가 찍는 방식의 규칙을 각각 배열에 담는다.
- for 문으로 순회하면서 answers와 일치하는 것의 개수를 count한다.
- 3개의 count를 비교한다.

## 실행

```java
public class MockTest {
    public int[] solution(int[] answers) {
        int[][] mathGiveUpPersons = {
                {1, 2, 3, 4, 5},
                {2, 1, 2, 3, 2, 4, 2, 5},
                {3, 3, 1, 1, 2, 2, 4, 4, 5, 5},
        };
        int[] scores = new int[3];
        int testLength = answers.length;


        for (int i = 0; i < 3; i += 1) {
            for (int j = 0; j < testLength; j += 1) {
                if (answers[j] == mathGiveUpPersons[i][j % mathGiveUpPersons[i].length]) {
                    scores[i] += 1;
                }
            }
        }

        int[] copyScores = new int[scores.length];
        System.arraycopy(scores, 0, copyScores, 0, scores.length);

        Arrays.sort(copyScores);

        int max = copyScores[copyScores.length - 1];

        ArrayList<Integer> result = new ArrayList<>();

        for (int i = 0; i < scores.length; i += 1) {
            if (scores[i] == max) {
                result.add(i + 1);
            }
        }

        return result.stream().mapToInt(v -> v.intValue()).toArray();
    }
}
```

## 회고

- 와... 진짜 Java로 알고리즘 문제 푸는 사람들은 대단하다...
- 나는 진짜 답답해가지구 못하겠다.
- JavaScript의 편리함에 감사함을 느낀다.
