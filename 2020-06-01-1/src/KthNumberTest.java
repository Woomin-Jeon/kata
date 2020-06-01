import org.junit.Test;
import static org.junit.Assert.assertArrayEquals;

public class KthNumberTest {
    @Test
    public void testSolution () {
        KthNumber kthNumber = new KthNumber();

        int[] array = {1, 5, 2, 6, 3, 7, 4};
        int[][] commands = {{2, 5, 3}, {4, 4, 1}, {1, 7, 3}};
        int[] expectation = {5, 6, 3};

        assertArrayEquals(expectation, kthNumber.solution(array, commands));
    }
}
