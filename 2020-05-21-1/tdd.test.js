const solution = (begin, target, words) => {
  if (!words.includes(target)) {
    return 0;
  }

  words = words.filter(v => v !== begin);
  const answers = [];

  searchWord(words, begin, target, answers)

  return words.length - Math.max(...answers) + 1;
};

const searchWord = (words, begin, target, answers) => {
  const beginsIndex = words.findIndex(v => v === begin);
  if (beginsIndex >= 0) {
    words.splice(beginsIndex, 1);
  }

  let differenceCount = 0;

  words.forEach(word => {
    word.split('').forEach((v, i) => {
      if (v !== begin[i]) {
        differenceCount += 1;
      }
    })

    if (differenceCount === 1) {
      if (word === target) {
        answers.push(words.length);
        return;
      }

      const copy = words.slice();
      searchWord(copy, word, target, answers);
    }

    differenceCount = 0;
  });

  return 0;
};

test('solution', () => {
  expect(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])).toBe(4);
  expect(solution('hot', 'lot', ['dot', 'dog', 'lot', 'log'])).toBe(1);
  expect(solution('hot', 'lot', ['hot', 'dot', 'dog', 'lot', 'log'])).toBe(1);
});
