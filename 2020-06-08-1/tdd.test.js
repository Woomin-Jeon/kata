const solution = (people, limit) => {
  people.sort((a, b) => b - a);

  let boatCount = 0;

  while(people.length > 0) {
    const max = people[0];
    const min = people[people.length - 1];

    if (max + min > limit) {
      people.shift();
      boatCount += 1;
      continue;
    }

    people.shift();
    people.pop();
    boatCount += 1;
  }

  return boatCount;
}

test('solution', () => {
  expect(solution([70, 50, 80, 50], 100)).toBe(3);
  expect(solution([50, 50, 50, 50], 100)).toBe(2);
  expect(solution([50, 50, 50, 60], 100)).toBe(3);
  expect(solution([10, 40, 30, 20], 100)).toBe(2);
  expect(solution([100, 100, 100, 100], 100)).toBe(4);
  expect(solution([90, 10, 80, 10, 10, 20], 100)).toBe(3);
  expect(solution([10, 20, 30, 40, 50, 60, 70, 80, 90], 100)).toBe(5);
});
