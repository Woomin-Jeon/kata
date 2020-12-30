const solution = (number, k) => {
  const numbers = [...number];
  const stack = [];
  let count = k;

  for (let i = 0; i < numbers.length; i += 1) {
    const target = numbers[i];

    count = crushDown(stack, target, count);

    if (count === 0) {
      const remains = numbers.slice(i + 1, numbers.length);
      return [...stack, ...remains].join('');
    }
  }

  return stack.slice(0, stack.length - k).join('');
};

const crushDown = (stack, target, k) => {
  while (true) {
    const topOfStack = stack[stack.length - 1] || 10;

    if (target <= topOfStack || k === 0) {
      stack.push(target);
      return k;
    }

    stack.pop();
    k -= 1;
  }
}

test('crushDown', () => {
  const stack1 = [5, 3, 2, 2, 1];

  expect(crushDown(stack1, 4, 3)).toBe(0);
  expect(stack1).toEqual([5, 3, 4]);

  const stack2 = [5, 3, 5, 2, 1];

  expect(crushDown(stack2, 4, 3)).toBe(1);
  expect(stack2).toEqual([5, 3, 5, 4]);
})

test('solution', () => {
  expect(solution('1924', 2)).toBe('94');
  expect(solution('1231234', 3)).toBe('3234');
  expect(solution('4177252841', 4)).toBe('775841');
  expect(solution('54321', 2)).toBe('543');
});
