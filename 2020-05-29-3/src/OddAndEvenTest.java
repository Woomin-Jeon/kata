import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class OddAndEvenTest {
    @Test
    public void testSolution() {
        OddAndEven oddAndEven = new OddAndEven();
        assertEquals("Odd", oddAndEven.solution(3));
    }
}
