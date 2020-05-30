import java.util.Arrays;
import org.junit.Test;
import static org.junit.Assert.assertArrayEquals;

public class MockTestTest {
    @Test
    public  void testSolution() {
        MockTest mockTest = new MockTest();
        int[] expectation = { 1 };
        int[] answer = {1, 2, 3, 4, 5};
        assertArrayEquals(expectation, mockTest.solution(answer));
    }
}
