import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CaesarCipherTest {
    @Test
    public void testSolution () {
        CaesarCipher caesarCipher = new CaesarCipher();
        assertEquals("BC", caesarCipher.solution("AB", 1));
        assertEquals("a", caesarCipher.solution("z", 1));
        assertEquals("e F d", caesarCipher.solution("a B z", 4));
    }
}
