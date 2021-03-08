const solution = (words) => words.filter(word => isGroupWord(word)).length;

const isGroupWord = (word) =>
  [...word].reduce((acc, currChar) => {
    const prevChar = acc.prevChar;
    acc.prevChar = currChar;

    if (prevChar === currChar) {
      return acc;
    }

    if (acc.history[currChar]) {
      return { ...acc, isTrue: false };
    }

    acc.history[currChar] = true;
    
    return acc;
  }, { isTrue: true, prevChar: '', history: {} }).isTrue;

test('isGroupWord', () => {
  expect(isGroupWord('aabbbcdeef')).toBe(true);
  expect(isGroupWord('aabbbbea')).toBe(false);
});

test('solution', () => {
  expect(solution(['happy', 'new', 'year', 'aabbbccb'])).toBe(3);
});
