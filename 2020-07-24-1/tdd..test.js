const solution = (s) => {
  const results = [];

  s.split("").forEach((v, i) => {
    if (s[i] === s[i + 1]) {
      const prevIndex = i - 1;
      const nextIndex = i + 2;
      searchPalindromeArea(prevIndex, nextIndex, results, s);
    }

    const prevIndex = i - 1;
    const nextIndex = i + 1;
    searchPalindromeArea(prevIndex, nextIndex, results, s);
  });

  return Math.max(...results);
};

const searchPalindromeArea = (prevIndex, nextIndex, results, s) => {
  while(true) {
    if (prevIndex < 0 || nextIndex > s.length - 1 || s[prevIndex] !== s[nextIndex]) {
      nextIndex -= 1;
      prevIndex += 1;
      
      const distance = nextIndex - prevIndex + 1
      results.push(distance);
      
      break;
    }

    prevIndex -= 1;
    nextIndex += 1;
  }
};

test('solution', () => {
  expect(solution("abcdcba")).toBe(7);
  expect(solution("abacde")).toBe(3);
  expect(solution("abcabcdcbae")).toBe(7);
  expect(solution("aaaa")).toBe(4);
  expect(solution("abcde")).toBe(1);
  expect(solution("a")).toBe(1);
  expect(solution("abcbaqwertrewqq")).toBe(9);
  expect(solution("abcbaqwqabcba")).toBe(13);
  expect(solution("abba")).toBe(4);
  expect(solution("abaabaaaaaaa")).toBe(7);
});
