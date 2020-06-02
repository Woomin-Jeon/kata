import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CenterCharacterTest {
    @Test
    public void testSolution () {
        CenterCharacter centerCharacter = new CenterCharacter();
        assertEquals("c", centerCharacter.solution("abcde"));
    }
}
