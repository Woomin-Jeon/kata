const solution = (name) => {
  const characters = name.split("");

  let upDownCount = 0;
  characters.forEach(char => {
    upDownCount += countUpDownManipulation(char);
  });

  const leftRightCounts = [];
  leftRightCounts.push(goOnlyRight(characters));
  leftRightCounts.push(goOnlyLeft(characters));
  characters.forEach((char, index) => {
    leftRightCounts.push(goRightAndTurnLeft(characters, index));
    leftRightCounts.push(goLeftAndTurnRight(characters, index));
  });
  const minimumLeftRigthCount = Math.min(...leftRightCounts);

  return upDownCount + minimumLeftRigthCount;
};

const countUpDownManipulation = (char) => {
  const Z = 'Z'.charCodeAt();
  const A = 'A'.charCodeAt();
  const C = char.charCodeAt();
  
  const upGoing = C - A;
  const downGoing = Z - C + 1; 

  return downGoing > upGoing ? upGoing : downGoing;
};

const goOnlyRight = (characters) => {
  for (let i = 0; i < characters.length; i += 1) {
    const nextContinuousACount = countNextContinuousA(characters, i);
    const remainedCharacters = characters.length - i - 1;
    
    if (nextContinuousACount === remainedCharacters) {
      return i;
    }
  }
};

const goOnlyLeft = (characters) => {
  const reversedCharaters = characters.slice().reverse();

  return goOnlyRight(reversedCharaters) + 1;
};

const goRightAndTurnLeft = (characters, turningIndex) => {
  const count_goingRight = turningIndex;
  
  const count_backToZero = count_goingRight;
  
  const continuous_A_afterTurningIndex = countNextContinuousA(characters, turningIndex);
  const count_remainingCharacter = characters.length - count_goingRight - 1 - continuous_A_afterTurningIndex;
  
  return count_goingRight + count_backToZero + count_remainingCharacter;
};

const goLeftAndTurnRight = (characters, index) => {
  const reversedCharaters = characters.slice().reverse();
  const reversedIndex = characters.length - 1 - index;

  const count_goingLeft = reversedIndex + 1;
  
  const count_backToZero = count_goingLeft - 1;

  const continuous_A_beforeTurningIndex = countNextContinuousA(reversedCharaters, reversedIndex);
  const count_remainingCharacter = characters.length - count_goingLeft - continuous_A_beforeTurningIndex;

  return count_goingLeft + count_backToZero + count_remainingCharacter;
};

const countNextContinuousA = (name, currentIndex) => {
  let nextIndex = currentIndex + 1;
  let continuousACount = 0;

  while (nextIndex < name.length && name[nextIndex] === 'A'){
    continuousACount += 1;
    nextIndex += 1;
  }
  
  return continuousACount;
}

test("goOnlyLeft", () => {
  expect(goOnlyLeft(['A', 'B', 'C', 'D', 'E'])).toBe(4);
  expect(goOnlyLeft(['A', 'A', 'C', 'D', 'E'])).toBe(3);
  expect(goOnlyLeft(['A', 'B', 'A', 'A', 'E'])).toBe(4);
});

test("goOnlyRight", () => {
  expect(goOnlyRight(['A', 'B', 'C', 'D', 'E'])).toBe(4);
  expect(goOnlyRight(['A', 'B', 'C', 'A', 'A'])).toBe(2);
  expect(goOnlyRight(['A', 'A', 'C', 'A', 'A'])).toBe(2);
  expect(goOnlyRight(['A', 'A', 'A', 'A', 'A'])).toBe(0);
});

test("goLeftAndTurnRight", () => {
  expect(goLeftAndTurnRight(['A', 'B', 'C', 'A', 'A', 'A', 'D', 'E'], 2)).toBe(13);
  expect(goLeftAndTurnRight(['A', 'B', 'C', 'A', 'A', 'A', 'D', 'E'], 3)).toBe(12);
  expect(goLeftAndTurnRight(['A', 'B', 'C', 'A', 'A', 'A', 'D', 'E'], 4)).toBe(10);
});

test("goRightAndTurnLeft", () => {
  expect(goRightAndTurnLeft(['A', 'B', 'C', 'A', 'A', 'A', 'D', 'E'], 4)).toBe(10);
  expect(goRightAndTurnLeft(['A', 'B', 'C', 'A', 'A', 'A', 'D', 'E'], 3)).toBe(8);
  expect(goRightAndTurnLeft(['A', 'B', 'C', 'A', 'A', 'A', 'D', 'E'], 2)).toBe(6);
  expect(goRightAndTurnLeft(['A', 'B', 'C', 'A', 'A', 'A', 'D', 'E'], 1)).toBe(8);
});

test("countUpDownManipulation", () => {
  expect(countUpDownManipulation('C')).toBe(2);
  expect(countUpDownManipulation('Z')).toBe(1);
  expect(countUpDownManipulation('X')).toBe(3);
});

test("countNextContinuousA", () => {
  expect(countNextContinuousA("ABAAA", 1)).toBe(3);
  expect(countNextContinuousA("ABAAABC", 1)).toBe(3);
  expect(countNextContinuousA("ABAAABC", 4)).toBe(0);
  expect(countNextContinuousA("ABAAABC", 0)).toBe(0);
  expect(countNextContinuousA("ABCAAADE", 2)).toBe(3);
});

test("solution", () => {
  expect(solution("JAN")).toBe(23);
  expect(solution("JEROEN")).toBe(56);
  expect(solution("AAABAAA")).toBe(4);
});