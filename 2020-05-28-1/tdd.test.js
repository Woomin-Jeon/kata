function solution(number, k) {
    const numbers = number.split('');
    const stack = [];

    numbers.forEach(target => {
      while(k > 0) {
        const lastNumberInStack = stack[stack.length - 1];

        if (lastNumberInStack < target) {
          stack.pop();
          k -= 1;
          continue;
        }
        
        break;
      }

      stack.push(target);
    });

    stack.splice(stack.length - k, k);
    return stack.join('');
}

test('solution', () => {
  expect(solution('1924', 2)).toBe('94');
  expect(solution('1231234', 3)).toBe('3234');
  expect(solution('4177252841', 4)).toBe('775841');
  expect(solution('99110', 1)).toBe('9911');
  expect(solution('24154', 2)).toBe('454');
  expect(solution('991199', 2)).toBe('9999');
  expect(solution('1199', 1)).toBe('199');
  expect(solution('1199', 2)).toBe('99');
  expect(solution('1199', 3)).toBe('9');
});
