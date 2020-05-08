const solution = (k, rooms) => {
  const map = new Map();
  const result = [];

  rooms.forEach(room => {
    const getRoom = map.get(room);

    if (getRoom) {
      findEmptyRoom(map, room, room, result);
    } else {
      map.set(room, room + 1);
      result.push(room);
    }
  });

  return result;
};

const findEmptyRoom = (map, room, original, result) => {
  let current = room;
  let child = map.get(room);

  if (!child) {
    map.set(original, current + 1);
    map.set(room, current + 1);
    map.set(original + 1, current + 1);
    result.push(current);
    return;
  }

  return findEmptyRoom(map, child, original, result);
};

test('solution', () => {
  expect(solution(10, [1, 3, 4, 1, 3, 1])).toEqual([1, 3, 4, 2, 5, 6]);
  expect(solution(10, [1, 3, 4, 1, 3, 1, 1, 1, 8, 7, 13, 11, 11, 11, 1, 1, 6, 30, 3]))
    .toEqual([1, 3, 4, 2, 5, 6, 7, 8, 9, 10, 13, 11, 12, 14, 15, 16, 17, 30, 18]);
  expect(solution(10, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
