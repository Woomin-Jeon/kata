const newMap = (arr) => {
  const map = {};
  arr.forEach(v => {
    const key = v[0];
    const value = v[1];

    map[key] = value;
  });

  return map;
}

const map_set = (map, key, value) => {
  map[key] = value;
}

const map_has = (map, key) => {
  return !!map[key];
}

const map_get = (map, key) => {
  return map[key];
}

const map_delete = (map, key) => {
  delete map[key];
}

const map_size = (map) => {
  return Object.keys(map).length;
}

const map_clear = (map) => {
  const keys = Object.keys(map);
  keys.forEach(key => {
    delete map[key];
  });
}

test('newMap', () => {
  const input = [[1, "apple"], [2, "banana"], [1, "mango"]];

  expect(newMap(input)).toEqual({"1": "mango", "2": "banana"});
});

test('map_set', () => {
  const map = newMap([]);
  map_set(map, 1, "apple");

  expect(map_has(map, 1)).toBe(true);
});

test('map_get', () => {
  const map = newMap([]);
  map_set(map, 1, "apple");

  expect(map_get(map, 1)).toBe("apple");
});

test('map_delete', () => {
  const map = newMap([]);
  map_set(map, 1, "apple");
  map_delete(map, 1);

  expect(map_has(map, 1)).toBe(false);
});

test('map_size', () => {
  const map = newMap([[1, "apple"], [2, "banana"], [3, "mango"]]);

  expect(map_size(map)).toBe(3);
});

test('map_clear', () => {
  const map = newMap([[1, "apple"], [2, "banana"], [3, "mango"]]);
  map_clear(map);

  expect(map_size(map)).toBe(0);
});
