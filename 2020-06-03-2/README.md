# 크레인 인형 뽑기

## 이해

- 크레인은 좌우로 움직이며 격자의 가장 위에 있는 인형을 집는다.
- 인형을 집으면 바구니에 넣는다.
- 만약 인형이 없는 곳에서 크레인을 작동시키면 아무일도 일어나지 않는다.
- 바구니에 같은 인형이 연달이 존재하면 이를 터트린다.
- 이 때, 터트린 인형의 개수를 return 하라.

## 계획

- while문을 돌린다.
- moves를 Queue로 바꾼다.
- moves에 있는 원소들을 board에서 찾다가 인형을 발견하면 그 자리를 0으로 변경하고 인형을 바구니(stack)에 넣는다.
- 바구니에 넣을 때는, 바구니[바구니.length - 1]과 일치하는 지 확인한다. 만약 일치한다면 인형을 터트린다.
- 이때 터트리는 인형을 count하여 x2 한 뒤 return한다.

## 실행

```java
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
```

## 회고

- Queue와 Stack에 대해 익혀볼 수 있었던 좋은 시간이었던 것 같다.
- 자주 써먹어야겠다.
