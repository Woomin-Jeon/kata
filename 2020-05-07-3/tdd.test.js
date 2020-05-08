const solution = (baseball) => Array(889).fill(111).map((v, i) => v + i)
    .map(v => v.toString().split(''))
    .filter(v => removeZero(v))
    .filter(v => removeDuplication(v))
    .map(v => v.join(''))
    .filter(answer => baseball.every(question => {
        const result = response(answer, question[0]);
        return result[0] === question[1] && result[1] === question[2] ? true : false;
      })
    ).length;

const splitNumberToArray = (numbers) => numbers.toString().split('').map(v => Number(v));
const removeZero = (v) => !v.includes('0');
const removeDuplication = (v) => new Set(v).size === 3;

const response = (answer, question) => {
  const answerArray = splitNumberToArray(answer);
  const questionArray = splitNumberToArray(question);

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
