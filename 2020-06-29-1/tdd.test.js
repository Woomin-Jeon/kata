const solution = (n, words) => {
  const stack = [words.shift()];

  let time = 1;
  while (words.length > 0) {
    const thisTurnUser = (time % n) + 1;
    const iterationCycle = parseInt(time / n) + 1;

    const currentWord = words.shift();
    const previousWord = stack[stack.length - 1];

    const currentWordFirst = currentWord[0];
    const previousWordLast = previousWord[previousWord.length - 1];

    if (currentWordFirst !== previousWordLast) {
      return [thisTurnUser, iterationCycle];
    }

    if (checkDuplication(stack, currentWord)) {
      return [thisTurnUser, iterationCycle];
    }

    stack.push(currentWord);
    time += 1;
  }

  return [0, 0];
};

const checkDuplication = (stack, word) => {
  return !!stack.find(v => v === word);
}

test('checkDuplication', () => {
  expect(checkDuplication(["a", "b", "c"], "d")).toBe(false);
  expect(checkDuplication(["a", "b", "c"], "b")).toBe(true);
});

test('solution', () => {
  expect(solution(
    3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']
  )).toEqual([3, 3]);
  expect(solution(
    2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']
  )).toEqual([1, 3]);
});
