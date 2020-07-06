const solution = (bridge_length, weight, truck_weights) => {
  const ready = truck_weights.slice()
  const bridgeQueue = []

  let seconds = 0;
  while (ready.length > 0) {
    seconds += 1;

    const target = ready[0];

    if (isExpired(bridgeQueue[0], seconds)) {
      bridgeQueue.shift();
    }

    if (checkBridgeLimit(bridgeQueue, weight, target)) {
      bridgeQueue.push({ expire: seconds + bridge_length, weight: ready.shift() });
    }    
  }
  
  return seconds + bridge_length;
};

const checkBridgeLimit = (onBridge, limit, target) => 
  onBridge.reduce((acc, cur) => acc + cur.weight, 0) + target <= limit;  

const isExpired = (target, seconds) =>
  target ? target.expire === seconds : false;

test('isExpired', () => {
  expect(isExpired({ expire: 4, weight: 2 }, 4)).toBe(true);
  expect(isExpired({ expire: 4, weight: 2 }, 3)).toBe(false);
});

test('checkBridgeLimit', () => {
  expect(checkBridgeLimit([], 10, 5)).toBe(true);
  expect(checkBridgeLimit([
    { weight: 1 },
    { weight: 2 },
    { weight: 3 },
    { weight: 4 }], 15, 5)).toBe(true);
  expect(checkBridgeLimit([
    { weight: 1 }, 
    { weight: 2 }, 
    { weight: 3 },
    { weight: 4 }], 15, 6)).toBe(false);
});

test('solution', () => {
  expect(solution(2, 10, [7,4,5,6])).toBe(8);
});
