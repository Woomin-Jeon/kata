const solution = (s) => {
  const result = [];

  if (s.length === 1) {
    return 1;
  }

  for (let i = 1; i <= Math.floor(s.length / 2); i += 1) {
    result.push(compressString(s, i));
  }

  return Math.min(...result);
};

const compressString = (str, n) => {
  const subStrings = [];

  for (let i = 0; i < str.length; i += n) {
    subStrings.push(str.substring(i, i+n));
  }
  
  const stack = [{ value: subStrings[0], count: 1 }];

  for (let i = 1; i < subStrings.length; i += 1) {
    const lastValueOfStack = stack[stack.length - 1];
    if (lastValueOfStack.value == subStrings[i]) {
      lastValueOfStack.count += 1;
      continue;
    }

    stack.push({ value: subStrings[i], count: 1 });
  }

  return stack.reduce((acc, cur) => {
    const valueLength = cur.value.length;
    const countLength = cur.count > 1 ? ("" + cur.count).length : 0;
    return acc + valueLength + countLength;
  }, 0);
}

test('compressString', () => {
  expect(compressString("ababc", 1)).toBe(5);
  expect(compressString("ababc", 2)).toBe(4);
  expect(compressString("abcabc", 3)).toBe(4);
  expect(compressString("aabbaccc", 1)).toBe(7); 
  expect(compressString("aabbaccc", 2)).toBe(8);
  expect(compressString("aabbaccc", 3)).toBe(8);
  expect(compressString("aabbaccc", 4)).toBe(8);
});

test('solution', () => {
  expect(solution("aabbaccc")).toBe(7);
  expect(solution("ababcdcdababcdcd")).toBe(9);
  expect(solution("abcabcdede")).toBe(8);
  expect(solution("abcabcabcabcdededededede")).toBe(14);
  expect(solution("xababcdcdababcdcd")).toBe(17);
  expect(solution("a")).toBe(1);
});
