public class HarshadNumber {
    public boolean solution(int n) {
        String str = String.valueOf(n);
        String[] arr = str.split("");
        int[] intArr = new int[arr.length];

        for (int i = 0; i < arr.length; i += 1) {
            intArr[i] = Integer.parseInt(arr[i]);
        }

        int sum = 0;
        for (int item : intArr) {
            sum += item;
        }

        return n % sum == 0;
    }
}
