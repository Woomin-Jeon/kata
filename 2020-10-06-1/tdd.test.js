const solution = (length, time, targets) => {
  let answer = 0;
  let numbers = Array(length).fill().map((_, i) => i + 1);

  targets.forEach(target => {
    const leftMoving = getMoveCount(moveLeft, numbers, target);
    const rightMoving = getMoveCount(moveRight, numbers, target);

    const smallerMoving = leftMoving.time < rightMoving.time ? leftMoving : rightMoving;

    numbers = smallerMoving.arr;
    numbers.shift();
    answer += smallerMoving.time;
  });

  return answer;
};

const getMoveCount = (moveMethod, numbers, target) => {
  let time = 0;
  let arr = numbers.slice();

  while (true) {
    if (arr[0] === target) {
      return { time, arr };
    }

    arr = moveMethod(arr);
    time += 1;
  }
};

const moveRight = (arr) => {
  return [arr[arr.length - 1], ...arr.slice(0, arr.length - 1)];
};

const moveLeft = (arr) => {
  return [...arr.slice(1, arr.length), arr[0]];
};

test('getMoveCount', () => {
  const arr = [1, 2, 3, 4, 5, 6];
  expect(getMoveCount(moveLeft, arr, 3).time).toBe(2);
  expect(getMoveCount(moveRight, arr, 3).time).toBe(4);
});

test('moveLeft', () => {
  expect(moveLeft([1, 2, 3])).toEqual([2, 3, 1]);
})

test('moveRight', () => {
  expect(moveRight([1, 2, 3])).toEqual([3, 1, 2]);
});

test('solution', () => {
  expect(solution(10, 3, [2, 9, 5])).toBe(8);
  expect(solution(10, 3, [1, 2, 3])).toBe(0);
});
