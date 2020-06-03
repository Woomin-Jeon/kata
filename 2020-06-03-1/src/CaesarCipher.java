import java.util.Arrays;

public class CaesarCipher {
    public String solution (String target, int n) {
        String result = "";

        for (int i = 0; i < target.length(); i += 1) {
            char ch = target.charAt(i);

            if ((int)ch == 32) {
                result += " ";
                continue;
            }

            ch = Character.isLowerCase(ch)
                    ? (char) ((ch - 'a' + n) % 26 + 'a')
                    : (char) ((ch - 'A' + n) % 26 + 'A');

            result += ch;
        }

        return result;
    }
}
