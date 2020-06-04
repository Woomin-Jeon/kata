const solution = (str) => {
  const arr = makeArrayWithLaser(str);
  const slicedIron = [];
  let iron = 0;

  arr.forEach(v => {
    if (v === "(") {
      iron += 1;
      return;
    }

    if (v === '0') {
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
  return str.replace(/\(\)/g, 0).split("")
}

test('makeArrayWithLaser', () => {
  expect(makeArrayWithLaser("()(((()())(())()))(())")).toEqual([
    '0', '(', '(', '(', '0', '0', ')', '(', '0', ')', '0', ')', ')', '(', '0', ')'
  ]);
});

test('solution', () => {
  expect(solution("()(((()())(())()))(())")).toBe(17);
});
