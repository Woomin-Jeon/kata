const solution = (casheSize, cities) => {
  const cashe = new Cashe(casheSize);

  cities
    .map(v => v.toUpperCase())
    .forEach(city => cashe.insert(city));

  return cashe.time;
};

const Cashe = class {
  constructor(size) {
    this.size = size;
    this.cashe = [];
    this.time = 0;
  }

  casheHit(index, item) {
    this.cashe.splice(index, 1);
    this.cashe.push(item);
    this.time += 1;
  }

  casheMiss(index, item) {
    if (this.size === this.cashe.length) {      
      this.cashe.shift();
    }

    this.cashe.push(item);
    this.time += 5;
  }

  insert(item) {
    const index = this.cashe.findIndex(v => v === item);

    index < 0 || this.size === 0
      ? this.casheMiss(index, item)
      : this.casheHit(index, item);    
  }
}

test('solution', () => {
  expect(solution(3, [
    'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'
  ])).toBe(50);
  expect(solution(3, [
    'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul',
  ])).toBe(21);
  expect(solution(0, [
    'Jeju', 'Jeju', 'Seoul', 'Jeju', 'Pangyo',
  ])).toBe(25);
});
