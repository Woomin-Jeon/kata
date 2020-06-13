
const solution = (s) =>
  s.split(" ").map(v => convertToJadenCase(v)).join(" ");

const convertToJadenCase = (str) => 
  str.split("").map((v, i)=> i === 0 ? v.toUpperCase() : v.toLowerCase()).join("");


test('convertToJadenCase', () => {
  expect(convertToJadenCase("apPLe")).toBe("Apple");
});

test('solution', () => {
  expect(solution("3people unFollowed me")).toBe("3people Unfollowed Me")
});
