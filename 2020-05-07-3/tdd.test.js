const solution = (baseball) => {
  let numbers = Array(889).fill(111).map((v, i) => v + i);

  numbers = numbers.filter(v => !v.toString().split('').includes('0'));
  numbers = numbers.filter((v, i) => {
    const arr = v.toString();
    return arr[0] === arr[1] || arr[1] === arr[2] || arr[0] === arr[2] ? false : true;
  });

  baseball.forEach(question => {
    numbers = numbers.filter(answer => {
      const result = response(answer, question[0]);
      return result[0] === question[1] && result[1] === question[2] ? true : false;
    });
  });
  
  return numbers.length;
};

const response = (answer, question) => {
  const answerArray = answer.toString().split('').map(v => Number(v));
  const questionArray = question.toString().split('').map(v => Number(v));

  let strike = 0;
  let ball = 0;

  answerArray.forEach((v, i) => {
    if (answerArray[i] === questionArray[i]) {
      strike += 1;
    } else if (answerArray.includes(questionArray[i])) {
      ball += 1;
    }
  });

  return [strike, ball];
}

test('response', () => {
  expect(response(111, 123)).toEqual([1, 0]);
  expect(response(111, 113)).toEqual([2, 0]);
  expect(response(111, 233)).toEqual([0, 0]);
  expect(response(123, 132)).toEqual([1, 2]);
});

test('solution', () => {
  expect(solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]])).toBe(2);
});
