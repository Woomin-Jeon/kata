const solution = (n, k) => {
  const numbers = Array(n).fill().map((v, i) => i + 1);
  const answer = [];
  const index = k - 1;

  let time = n;
  let sectionStartIndex = 0;
  let sectionEndIndex = factorial(n) - 1;

  for (let i = 0; i < n; i += 1) {
    const slice = (sectionEndIndex - sectionStartIndex + 1) / time;
    const sectionIndex = Math.floor((index - sectionStartIndex) / slice);
    
    sectionStartIndex += (sectionIndex * slice);
    sectionEndIndex = sectionStartIndex + slice - 1;

    answer.push(...numbers.splice(sectionIndex, 1));
  
    time -= 1;  
  }

  return answer;
};

const factorial = (n) => {
  let answer = 1;
  while (n) answer *= n--;

  return answer;
};

test('factorial', () => {
  expect(factorial(1)).toBe(1);
  expect(factorial(2)).toBe(2);
  expect(factorial(3)).toBe(6);
  expect(factorial(4)).toBe(24);
  expect(factorial(5)).toBe(120);
});

test('solution', () => {
  expect(solution(4, 17)).toEqual([3, 4, 1, 2]);
});
