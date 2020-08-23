const solution = (dirs) => {
  const pathSet = new Set();
  const currentPos = { x: 0, y: 0 };
  const direction = {
    'U': (pos) => pos.y < 5 ? pos.y += 1 : pos.y = 5,
    'D': (pos) => pos.y > -5 ? pos.y -= 1 : pos.y = -5,
    'R': (pos) => pos.x < 5 ? pos.x += 1 : pos.x = 5,
    'L': (pos) => pos.x > -5 ? pos.x -= 1 : pos.x = -5,
  };

  [...dirs].forEach(dir => {
    const previousPos = { ...currentPos };
    direction[dir](currentPos);
    
    const path = [`${previousPos.x}${previousPos.y}`, `${currentPos.x}${currentPos.y}`].sort();
    pathSet.add(path.join(':'));
  });

  return [...pathSet].map(v => v.split(':')).filter(v => v[0] !== v[1]).length;
};

test('solution', () => {
  expect(solution('UDUDUDUDDU')).toBe(2);
  expect(solution('URDLURDLURD')).toBe(4);
  expect(solution('LULLLLLLU')).toBe(7);
  expect(solution('ULURRDLLU')).toBe(7);
});
