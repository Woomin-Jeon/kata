import java.util.stream.Stream;

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
