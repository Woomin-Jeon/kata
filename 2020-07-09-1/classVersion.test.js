class CustomMap {
  constructor() {
    this.map = {};
  }

  set(key, value) {
    this.map[key] = value;
  }

  has(key) {
    return !!this.map[key];
  }

  get(key) {
    return this.map[key];
  }

  delete(key) {
    delete this.map[key];
  }

  size() {
    return Object.keys(this.map).length;
  }

  clear() {
    const keys = Object.keys(this.map);
    keys.forEach(key => {
      delete this.map[key];
    });
  }
}

test('set', () => {
  const map = new CustomMap();
  map.set(1, "apple");

  expect(map.has(0)).toBe(false);
  expect(map.has(1)).toBe(true);
});

test('get', () => {
  const map = new CustomMap();
  map.set(1, "apple");
  map.set(1, "banana");

  expect(map.get(1)).toBe("banana");
});

test('delete', () => {
  const map = new CustomMap();
  map.set(1, "apple");
  map.delete(1);

  expect(map.has(1)).toBe(false);
});

test('clear', () => {
  const map = new CustomMap();
  map.set(1, "apple");
  map.set(2, "banana");
  map.set(3, "mango");

  expect(map.size()).toBe(3);

  map.clear();

  expect(map.size()).toBe(0);
});
