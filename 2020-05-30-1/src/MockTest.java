import java.util.Arrays;
import java.util.ArrayList;
import java.util.stream.Stream;

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
