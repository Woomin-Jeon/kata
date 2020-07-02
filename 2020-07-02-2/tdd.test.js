const solution = (expression) => {
  const numbers = expression.split(/[^0-9]/).map(v => Number(v));
  const operators = expression.split(/[0-9]/).filter(v => v);
  
  const formula = getFormula(numbers, operators);

  const cases = [
    ['*', '+', '-'], ['*', '-', '+'], ['+', '*', '-'],
    ['+', '-', '*'], ['-', '+', '*'], ['-', '*', '+'],
  ];

  return Math.max(...cases.map(operators => {
    let result = formula.slice();
    operators.forEach(operator => {
      result = computeByTargetOperator(result, operator);
    });
    
    return Math.abs(...result);
  }));
};

const getFormula = (numbers, operators) => {
  const formula = [];
  
  numbers.forEach((number, i) => {
    formula.push(number);

    if (operators[i]) {
      formula.push(operators[i]);
    }
  });
  
  return formula;
}

const computeByTargetOperator = (formula, targetOperator) => {
  const computation = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  }
  
  const stack = [];
  for (let i = 0; i < formula.length; i += 1) {
    const target = formula[i];
    if (target === targetOperator) {
      const previousValue = stack.pop();
      const nextValue = formula[i + 1];
      
      const result = computation[targetOperator](previousValue, nextValue);

      stack.push(result);
      i += 1;
      continue;
    }

    stack.push(target);
  }

  return stack;  
};

test('computeByTargetOperator', () => {
  expect(computeByTargetOperator([1, '*', 2, '+', 3, '*', 4], '*')).toEqual([2, '+', 12]);
  expect(computeByTargetOperator([1, '*', 2, '*', 3, '*', 4], '*')).toEqual([24]);
  expect(computeByTargetOperator([1, '+', 2, '*', 3, '+', 4], '+')).toEqual([3, '*', 7]);
  expect(computeByTargetOperator([1, '+', 2, '+', 3, '+', 4], '+')).toEqual([10]);
});

test('getFormula', () => {
  expect(getFormula([1, 2, 3, 4], ['+', '-', '*'])).toEqual([1, '+', 2, '-', 3, '*', 4]);
})

test('solution', () => {
  expect(solution("100-200*300-500+20")).toBe(60420);
  expect(solution("50*6-3*2")).toBe(300);
});
