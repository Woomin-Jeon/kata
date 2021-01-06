const solution = (begin, target, words) => {
  const answers = [];
  searchWord(begin, target, words, answers, 1);
  
  return answers.length === 0 ? 0 : Math.min(...answers);
};

const searchWord = (origin, target, words, answers, searchCount) => {
  const ableWords = words.filter(word => isSameWordExceptOneCharacter(origin, word));
  
  ableWords.forEach(word => {
    if (word === target) {
      answers.push(searchCount);
      return [...answers, searchCount];
    }

    const remainedWords = words.filter(w => w !== word);
    searchWord(word, target, remainedWords, answers, searchCount + 1);
  });
};

const isSameWordExceptOneCharacter = (a, b) => {
  let sameCount = 0;
  [...a].forEach((char, i) => {
    if (char === b[i]) {
      sameCount += 1;
    }
  });

  return sameCount === a.length - 1;
};

test('isSameWordExceptOneCharacter', () => {
  expect(isSameWordExceptOneCharacter('aaa', 'aab')).toBe(true);
  expect(isSameWordExceptOneCharacter('aaa', 'abb')).toBe(false);
  expect(isSameWordExceptOneCharacter('aaa', 'bab')).toBe(false);
  expect(isSameWordExceptOneCharacter('aaa', 'baa')).toBe(true);
  expect(isSameWordExceptOneCharacter('aaa', 'aba')).toBe(true);
});

test('solution', () => {
  expect(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])).toBe(4);
  expect(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])).toBe(0);
});
