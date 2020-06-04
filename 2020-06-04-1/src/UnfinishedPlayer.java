import java.util.Arrays;

public class UnfinishedPlayer {
    public String solution(String[] participants, String[] completions) {
        Arrays.sort(participants);
        Arrays.sort(completions);

        String answer = participants[participants.length - 1];

        for (int i = 0; i < completions.length; i += 1) {
            if (!completions[i].equals(participants[i])) {
                answer = participants[i];
                break;
            }
        }

        return answer;
    }
}
