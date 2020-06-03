import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CraneClawMachineTest {
    @Test
    public void testSolution() {
        CraneClawMachine craneClawMachine = new CraneClawMachine();
        int[][] board = {
                {0,0,0,0,0},
                {0,0,1,0,3},
                {0,2,5,0,1},
                {4,2,4,4,2},
                {3,5,1,3,1}
        };
        int[] moves = {1, 5, 3, 5, 1, 2, 1, 4};

        assertEquals(4, craneClawMachine.solution(board, moves));
    }
}
