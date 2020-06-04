import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class UnfinishedPlayerTest {
    @Test
    public void testSolution() {
        UnfinishedPlayer unfinishedPlayer = new UnfinishedPlayer();

        assertEquals("b", unfinishedPlayer.solution(
                new String[] {"a", "b", "c", "d"},
                new String[] {"a", "c", "d"})
        );
        assertEquals("leo", unfinishedPlayer.solution(
                new String[] {"leo", "kiki", "eden"},
                new String[] {"eden", "kiki"})
        );
    }
}
