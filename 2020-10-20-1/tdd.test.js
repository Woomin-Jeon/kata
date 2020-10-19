const solution = (n) => {
  const arr = Array(n).fill().map(v => 1);

  const answer = new Set();
  findNewCase(answer, arr);

  return answer.size;
};

const findNewCase = (answer, arr) => {
  answer.add(arr.join(''));

  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] + arr[i + 1] > 3) {
      continue;
    }

    const newArr = [...arr.slice(0, i), arr[i] + arr[i + 1], ...arr.slice(i + 2, arr.length)];
    findNewCase(answer, newArr);
  }
}

test('solution', () => {
  expect(solution(4)).toBe(7);
  expect(solution(7)).toBe(44);
  expect(solution(10)).toBe(274);
});