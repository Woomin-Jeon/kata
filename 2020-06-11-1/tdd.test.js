const solution = (n) => {
  let count = 1;

  for (let i = 1; i <= Math.floor(n / 2); i += 1) {
    let number = i;
    let nextNumber = i + 1;
    
    while(number <= n) {
      number += nextNumber;
      
      if (number === n) {
        count += 1;
      }

      nextNumber += 1;
    }
  }

  return count;
};

test('solution', () => {  
  expect(solution(3)).toBe(2);
  expect(solution(4)).toBe(1);
  expect(solution(5)).toBe(2);
  expect(solution(6)).toBe(2);
  expect(solution(8)).toBe(1);
  expect(solution(9)).toBe(3);
  expect(solution(10)).toBe(2);
  expect(solution(11)).toBe(2);
  expect(solution(12)).toBe(2);
  expect(solution(15)).toBe(4);
  expect(solution(2451)).toBe(8);
});
