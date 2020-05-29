import org.junit.Test;
import static org.junit.Assert.*;

public class HashardNumberTest {
    @Test
    public void testSolution() {
        HarshadNumber harshadNumber = new HarshadNumber();
        assertEquals(true, harshadNumber.solution(10));
    }
}
