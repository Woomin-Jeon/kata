const solution = (n, t, m, p) => {
  const max = t * m;
  
  let string = "";
  for (let i = 0; i < max; i += 1) {
    string += i.toString(n);
  }

  let answer = "";
  for (let i = p - 1; i < string.length; i += m) {
    answer += string[i];
  }

  return answer.toUpperCase().substring(0, t);
};

test('solution', () => {
  expect(solution(2, 4, 2, 1)).toBe("0111");
  expect(solution(16, 16, 2, 1)).toBe("02468ACE11111111");
});
