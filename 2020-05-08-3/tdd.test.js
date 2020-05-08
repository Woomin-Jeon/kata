const solution = (s) => {
  const result = [];
  const tuple = [];
  let tempt = [];
  let numberTempt = "";

  s = s.split('');
  s.pop();
  s.shift();
  s.forEach(v => {
    if (Number(v) >= 0) {
      numberTempt += v;
    } else if ( v === ',') {
      if (numberTempt !== '') {
        tempt.push(Number(numberTempt));
        numberTempt = "";
      }
    } else if (v === '}') {
      tempt.push(Number(numberTempt));
      tuple.push(tempt);
      tempt = [];
      numberTempt = "";
    }
  });

  tuple.sort((a, b) => b.length - a.length);
  const mainElement = tuple[0];

  mainElement.forEach(e => {
    let count = 0;
    tuple.forEach(t => {
      if (t.includes(e)) {
        count += 1;
      }
    });

    result.push([e, count]);
  });

  result.sort((a, b) => b[1] - a[1]);
  return result.map(v => v[0]);
};

test('sol', () => {
  expect(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")).toEqual([2, 1, 3, 4]);
  expect(solution("{{20,111},{111}}")).toEqual([111, 20]);
});
