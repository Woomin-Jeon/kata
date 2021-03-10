class Stack {
  constructor() {
    this.stack = [];
  }

  get = () => this.stack;

  push = (value) => {
    this.stack.push(value);
  }

  pop = () => this.empty() ? -1 : this.stack.pop();

  size = () => this.stack.length;

  top = () => this.empty() ? -1 : this.stack[this.stack.length - 1];

  empty = () => this.stack.length === 0 ? 1 : 0;
};

const solution = (strings) => {
  const stack = new Stack();

  let answer = '';

  strings.forEach(str => {
    if (str === 'pop') {
      answer += stack.pop();
      return;
    }

    if (str === 'top') {
      answer += stack.top();
      return;
    }

    if (str === 'size') {
      answer += stack.size();
      return;
    }

    if (str === 'empty') {
      answer += stack.empty();
      return;
    }

    const [command, value] = str.split(' ');
    stack.push(value);
  });
  
  return answer;
};

test('solution', () => {
  expect(solution([
    'push 1', 'push 2', 'top', 'size', 'empty',
    'pop', 'pop', 'pop', 'size', 'empty', 'pop',
    'push 3', 'empty', 'top',
  ])).toEqual('22021-101-103');
});

test('Stack', () => {
  const stack = new Stack();
  
  stack.push(1);
  expect(stack.get()).toEqual([1]);

  stack.push(2);
  stack.push(3);
  expect(stack.pop()).toBe(3);
  expect(stack.get()).toEqual([1, 2]);
  expect(stack.size()).toBe(2);
  expect(stack.top()).toBe(2);
  expect(stack.empty()).toBe(0);

  stack.pop();
  stack.pop();
  expect(stack.empty()).toBe(1);
});
