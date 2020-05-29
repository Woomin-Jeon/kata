public class SumOfMatrix {
    public int[][] solution(int[][] arr1, int[][] arr2) {
        int row = arr1.length;
        int column = arr1[0].length;
        int[][] result = new int[row][column];

        for (int i = 0; i < row; i += 1) {
            for (int j = 0; j < column; j += 1) {
                result[i][j] = arr1[i][j] + arr2[i][j];
            }
        }

        return result;
    }
}
