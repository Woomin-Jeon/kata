import java.util.Arrays;

public class CenterCharacter {
    public String solution (String str) {
        String[] strArr = str.split("");
        double centerIndex = Math.floor(str.length()/2);

        return str.length() % 2 == 1
                ? strArr[(int)centerIndex]
                : strArr[(int)centerIndex - 1] + strArr[(int)centerIndex];
    }
}
