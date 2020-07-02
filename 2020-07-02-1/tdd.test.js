const solution = (numbers, hand) => {
  const answer = [];

  let leftHandPosition = '*';
  let rightHandPosition = '#';

  numbers.forEach(number => {   
    if (number === 1 || number === 4 || number === 7) {
      answer.push('L');
      leftHandPosition = number;
      return;
    }

    if (number === 3 || number === 6 || number === 9) {
      answer.push('R');
      rightHandPosition = number;
      return;
    }

    const leftHandDistance = getDistance(leftHandPosition, number);
    const rightHandDistance = getDistance(rightHandPosition, number);

    if (leftHandDistance === rightHandDistance) {
      if (hand === "right") {
        answer.push('R');
        rightHandPosition = number;
        return;
      }

      if (hand === 'left') {
        answer.push('L');
        leftHandPosition = number;
        return;
      }
    }

    if (leftHandDistance > rightHandDistance) {
      answer.push('R');
      rightHandPosition = number;
    } 

    if (leftHandDistance < rightHandDistance) {
      answer.push('L');
      leftHandPosition = number;
    }
  });

  return answer.join("");
};

const getDistance = (locatedNumber, target) => {
  const keyPad = {
    1: [0, 0], 2: [0, 1], 3: [0, 2],
    4: [1, 0], 5: [1, 1], 6: [1, 2],
    7: [2, 0], 8: [2, 1], 9: [2, 2],
    '*': [3, 0], 0: [3, 1], '#': [3, 2],
  }

  const nowPosition = keyPad[locatedNumber];
  const targetPosition = keyPad[target];

  return Math.abs(targetPosition[0] - nowPosition[0]) + Math.abs(targetPosition[1] - nowPosition[1]);
};

test('getDistance', () => {
  expect(getDistance(1, 5)).toBe(2);
  expect(getDistance(3, 2)).toBe(1);
  expect(getDistance(2, 8)).toBe(2);
  expect(getDistance('#', 5)).toBe(3);
  expect(getDistance('*', 5)).toBe(3);
  expect(getDistance(8, 9)).toBe(1);
});

test('solution', () => {
  expect(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")).toBe("LRLLLRLLRRL");
  expect(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")).toBe("LRLLRRLLLRR");
  expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")).toBe("LLRLLRLLRL");
});
