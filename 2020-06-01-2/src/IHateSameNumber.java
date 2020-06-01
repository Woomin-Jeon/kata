import java.util.ArrayList;
import java.util.Arrays;

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
