const solution = (bridge_length, MaxWeight, trucks) => {
  let onBridge = [];
  let time = 0;

  while(true) {
    if (trucks.length === 0) {
      return time + bridge_length;
    }

    moveTruck(onBridge);
    onBridge = onBridge.filter(truck => truck[1] > 0);
    checkAndPush(onBridge, MaxWeight, trucks, bridge_length);

    time += 1;
  }
}

const moveTruck = (onBridge) => {
  onBridge.forEach(truck => truck[1] -= 1);
};

const checkAndPush = (onBridge, MaxWeight, trucks, bridge_length) => {
  const bridgeWeight = onBridge.reduce((acc, cur) => {
    return acc + cur[0];
  }, 0);

  if (bridgeWeight + trucks[0] <= MaxWeight) {
    onBridge.push([trucks[0], bridge_length]);
    trucks.shift();
  }
};

test('solution', () => {
  expect(solution(2, 10, [7,4,6,5])).toBe(8);
  expect(solution(100, 100,	[10])).toBe(101);
  expect(solution(100, 100, [10,10,10,10,10,10,10,10,10,10])).toBe(110);
});
