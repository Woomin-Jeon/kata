const getCombinations = (arr, num) => {
  let bits = Array(2 ** arr.length - 1).fill(1).map((v, i) => (v + i).toString(2).padStart(arr.length, 0));

  if (num) {
    bits = bits.filter(v => v.replace(/0/g, "").length === num);
  }

  const combinations = [];
  bits.forEach(bit => {
    const numberOfCases = [];
    
    bit.split("").forEach((_, i) => {
      if (bit[i] === "1") {
        numberOfCases.push(arr[i]);
      }
    });

    combinations.push(numberOfCases);
  });

  return combinations;
}

test('getCombinations', () => {
  expect(getCombinations([1, 2, 3], 1)).toEqual([[3], [2], [1]]);
  expect(getCombinations([1, 2, 3], 2)).toEqual([[2, 3], [1, 3], [1, 2]]);
  expect(getCombinations([1, 2, 3], 3)).toEqual([[1, 2, 3]]);

  expect(getCombinations([1, 2, 3])).toEqual(
    [[3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]
  );
});
