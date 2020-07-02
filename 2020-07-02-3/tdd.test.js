const solution = (gems) => {
  const numberOfGemTypes = new Set(gems).size;
  const map = new Map();
  const ranges = [];
  
  gems.forEach((gem, i) => {
    map.set(gem, i + 1);

    if (map.size === numberOfGemTypes) {
      const arr = [];

      map.forEach((value, key) => {
        arr.push({ gemName: key, gemNumber: value });
      });

      arr.sort((a, b) => a.gemNumber - b.gemNumber);
      const start = arr[0];
      const end = arr[arr.length - 1];

      ranges.push([start.gemNumber, end.gemNumber]);

      map.delete(start.gemName);
    }
  });

  ranges.sort((a, b) => sortByRangeLengthAndIndex(a, b));

  return ranges[0];
};

const sortByRangeLengthAndIndex = (a, b) => {
  const aLength = a[1] - a[0];
  const bLength = b[1] - b[0];

  if (aLength !== bLength) {
    return aLength - bLength;
  }

  return a[0] - b[0];
};

test('solution', () => {
  expect(solution(["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"])).toEqual([3, 7]);
  expect(solution(["AA", "AB", "AC", "AA", "AC"])).toEqual([1, 3]);
  expect(solution(["XYZ", "XYZ", "XYZ"])).toEqual([1, 1]);
  expect(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"])).toEqual([1, 5]);
  expect(solution(["A", "B", "B", "C", "A", "B"])).toEqual([3, 5]);
});
