const solution = (str) => {
  const arr = makeArrayWithLaser(str);
  const slicedIron = [];
  let iron = 0;

  arr.forEach(v => {
    if (v === "(") {
      iron += 1;
      return;
    }

    if (v === 0) {
      slicedIron.push(iron);
      return;
    }

    if (v === ")") {
      slicedIron.push(1);
      iron -= 1;
      return;
    }
  });

  return slicedIron.reduce((acc, cur) => acc + cur, 0);
};

const makeArrayWithLaser = (str) => {
  let arr = str.split('');
  
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] === "(" && arr[i+1] === ")") {
      arr[i] = 0;
      arr[i+1] = 1;
      i += 1;
    }
  }

  return arr.filter(v => v !== 1);
}

test('makeArrayWithLaser', () => {
  expect(makeArrayWithLaser("()(((()())(())()))(())")).toEqual([
    0, '(', '(', '(', 0, 0, ')', '(', 0, ')', 0, ')', ')', '(', 0, ')'
  ]);
});

test('solution', () => {
  expect(solution("()(((()())(())()))(())")).toBe(17);
});
