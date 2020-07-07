const solution = (p) => {
  if (p.length === 0) {
    return "";
  }

  const [u, v] = seperate(p);

  if (isCorrectString(u)) {
    return u + solution(v);
  }

  return '(' + solution(v) + ')' + reverseParenthesis(u.substr(1, u.length - 2));
};

const seperate = (p) => {
  let openCount = 0;
  let closeCount = 0;

  for (let i = 0; i < p.length; i += 1) {
    p[i] === '(' ? openCount += 1 : closeCount += 1;

    if (openCount === closeCount && openCount > 0) {
      return [p.substr(0, i + 1), p.substr(i + 1, p.length - i)];
    }
  }
};

const isCorrectString = (p) => {
  let openCount = 0;
  let closeCount = 0;

  for (let i = 0; i < p.length; i += 1) {
    p[i] === '(' ? openCount += 1 : closeCount += 1;

    if (openCount < closeCount) {
      return false;
    }
  }

  return true;
};

const reverseParenthesis = (p) => {
  let result = "";
  p.split("").forEach(char => {
    if (char === '(') {
      result += ')';
    }
    if (char === ')') {
      result += '(';
    }
  });

  return result;
};

test('reverseParenthesis', () => {
  expect(reverseParenthesis(")()(")).toBe("()()");
  expect(reverseParenthesis("))((")).toBe("(())");
});

test('isCorrectString', () => {
  expect(isCorrectString("()()")).toBe(true);
  expect(isCorrectString("(())")).toBe(true);
  expect(isCorrectString("))((")).toBe(false);
});

test('seperate', () => {
  expect(seperate("()))((()")).toEqual(["()","))((()"]);
  expect(seperate("))((()")).toEqual(["))((","()"]);
});

test('solution', () => {
  expect(solution("")).toBe("");
  expect(solution("()))((()")).toBe("()(())()");
});
