import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class GettingAverageTest {
    @Test
    public void testSolution() {
        GettingAverage gettingAverage = new GettingAverage();
        int[] input = { 1, 2, 3, 4 };
        assertEquals(2.5, gettingAverage.solution(input), 0);
    }
}
