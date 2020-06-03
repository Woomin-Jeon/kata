import java.util.ArrayDeque;
import java.util.Queue;

public class CraneClawMachine {
    public int solution(int[][] board, int[] moves) {
        ArrayDeque<Integer> stack = new ArrayDeque<>();
        Queue<Integer> queue = new ArrayDeque<>();

        for (int move: moves) {
            queue.add(move);
        }

        while(queue.size() > 0) {
            int index = (int)queue.remove() - 1;
            for (int[] line : board) {
                if (line[index] > 0) {
                    stack.push(line[index]);
                    line[index] = 0;
                    break;
                }
            }
        }

        int count = 0;
        int initialStackLength = stack.size();
        ArrayDeque<Integer> comparingStack = new ArrayDeque<>();
        comparingStack.push(0);

        for (int i = 0; i < initialStackLength; i += 1) {
            int previousValue = comparingStack.peek();
            int currentValue = stack.pop();

            if (previousValue == currentValue) {
                count += 2;
                comparingStack.pop();
                continue;
            }

            comparingStack.push(currentValue);
        }

        return count;
    }
}
