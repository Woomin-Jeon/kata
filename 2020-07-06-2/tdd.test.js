const solution = (s) => {
  const answer = [];

  for (let i = 1; i <= Math.ceil(s.length / 2); i += 1) {
    answer.push(getCompressedString(s, i).length);
  }

  return Math.min(...answer);
};

const getCompressedString = (str, range) => {
  const stack = [];

  for (let i = 0; i < Math.ceil(str.length / range); i += 1) {
    const target = str.substr(i * range, range);
    const lastValueOfStack = stack[stack.length - 1];

    if (!lastValueOfStack) {
      stack.push({ count: 1, string: target });
      continue;
    }    

    if (lastValueOfStack.string === target) {
      lastValueOfStack.count += 1;
      continue;
    }

    stack.push({ count: 1, string: target });
  }

  return convertDataToString(stack);
};

const convertDataToString = (stack) => {
  let result = "";
  stack.forEach(v => {
    if (v.count > 1) {
      result += v.count;
    }
    
    result += v.string;
  });

  return result;
};

test('getCompressedString', () => {
  expect(getCompressedString("aabbccd", 1)).toBe("2a2b2cd");
  expect(getCompressedString("abcabcabc", 3)).toBe("3abc");
});

test('solution', () => {
  expect(solution("aabbaccc")).toBe(7);
  expect(solution("ababcdcdababcdcd")).toBe(9);
});
