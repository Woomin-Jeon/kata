const solution = (operations) => {
  const queue = [];
  const result = [];

  operations.forEach(v => {
    if (v[0] === 'I') {
      const splited = v.split('');
      splited.shift();
      splited.shift();
      const value = splited.join('');
      queue.push(Number(value));
    };

    if (v[0] === 'D') {
      if (v[2] === '-') {
        const value = Math.min(...queue);
        const index = queue.findIndex(v => v === value);
        queue.splice(index, 1);
      } else {
        const value = Math.max(...queue);
        const index = queue.findIndex(v => v === value);
        queue.splice(index, 1);
      }
    }
  });

  if (queue.length === 0) {
    return [0, 0];
  } else {
    result.push(Math.max(...queue), Math.min(...queue));
    return result;
  }
};

test('solution', () => {
  expect(solution(['I 16','D 1'])).toEqual([0, 0]);
  expect(solution(['I 7','I 5','I -5','D -1'])).toEqual([7, 5]);
});
