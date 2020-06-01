import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.Stream;

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
