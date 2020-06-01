import org.junit.Test;
import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertEquals;

public class IHateSameNumberTest {
    @Test
    public void testSolution() {
        IHateSameNumber iHateSameNumber = new IHateSameNumber();
        int[] input = {1, 1, 3, 3, 0, 1, 1};
        int[] answer = {1, 3, 0, 1};

        assertArrayEquals(answer, iHateSameNumber.solution(input));
    }
}
