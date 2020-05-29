import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class SumOfMatrixTest {
    @Test
    public void testSolution() {
        SumOfMatrix sumOfMatrix = new SumOfMatrix();
        int[][] input1 = { {1, 2}, {2, 3} };
        int[][] input2 = { {3, 4}, {5, 6} };
        int[][] expectation = { {4, 6}, {7, 9} };
        assertEquals(expectation, sumOfMatrix.solution(input1, input2));
    }
}
