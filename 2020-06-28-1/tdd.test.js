const solution = (n) => foldPaper([], n);

const foldPaper = (arr, count) => {
  if (count === 0) {
    return arr;
  }

  const stack = [0];

  arr.forEach((v, i) => {
    stack.push(v);
    i % 2 === 0 ? stack.push(1) : stack.push(0);
  });

  return foldPaper(stack, count - 1);
}

test('solution', () => {
  expect(solution(3)).toEqual([0,0,1,0,0,1,1]);
  expect(solution(4)).toEqual([0,0,1,0,0,1,1,0,0,0,1,1,0,1,1]);
});
