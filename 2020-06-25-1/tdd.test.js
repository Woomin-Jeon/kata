const solution = (relation) => {
  const categories = makeCategories(relation);
  const allCases = getCombinations(categories);
  const allCombinedCases = allCases.map(v => combineCase(v));
  const casesMeetingUniqueness = allCombinedCases.filter(v => hasNoDuplication(v.value));
  const ids = casesMeetingUniqueness.map(v => v.id);
  const idsMeettingMinimality = removeSubset(ids);

  return idsMeettingMinimality.length;
};

const removeSubset = (ids) => {
  for (let i = ids.length - 1; i >= 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      if (isSubset(ids[i], ids[j])) {
        ids[i] = 'X';
      }
    }
  }

  return ids.filter(id => id !== 'X');
}

const isSubset = (target, subset) => {
  const targetCharacters = target.split("");
  const subsetCharacters = subset.split("");

  let count = 0;
  for (let i = 0; i < targetCharacters.length; i += 1) {
    for (let j = 0; j < subsetCharacters.length; j += 1) {
      if (targetCharacters[i] === subsetCharacters[j]) {
        count += 1;
      }
    }
  }

  return count === subset.length;
}

const hasNoDuplication = (arr) => {
  const set = new Set(arr);

  return set.size === arr.length;
}

const combineCase = (someCase) => {
  const result = [];  
  
  let id = "";
  for (let i = 0; i < someCase.length; i += 1) {
    id += someCase[i].id;
  }

  for (let i = 0; i < someCase[0].value.length; i += 1) {
    let value = "";
    for (let j = 0; j < someCase.length; j += 1) {
      value += someCase[j].value[i];
    }

    result.push(value);
  }

  return { id: id, value: result };
}

const makeCategories = (relation) => {
  const tuples = [];
  for (let i = 0; i < relation[0].length; i += 1) {
    const tempt = [];
    for (let j = 0; j < relation.length; j += 1) {
      tempt.push(relation[j][i]);
    }
    tuples.push({ id : i, value :tempt });
  }
  
  return tuples;
}

const getCombinations = (arr) => {
  let bits = Array(2 ** arr.length - 1).fill(1).map((v, i) => (v + i).toString(2).padStart(arr.length, 0));

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

test('isSubset', () => {
  expect(isSubset('023', '02')).toBe(true);
  expect(isSubset('023', '03')).toBe(true);
  expect(isSubset('023', '01')).toBe(false);
});

test('hasNoDuplication', () => {
  expect(hasNoDuplication([1, 2, 3])).toBe(true);
  expect(hasNoDuplication([1, 2, 3, 2])).toBe(false);
});

test('combineCase', () => {
  const exampleCase = [
    { id: 0, value: ['1', '2', '3', '4'] },
    { id: 1, value: ['a', 'b', 'c', 'd'] },
    { id: 2, value: ['A', 'B', 'C', 'D'] },
  ];
  expect(combineCase(exampleCase)).toEqual({ id: "012", value: ['1aA', '2bB', '3cC', '4dD'] });
});

test('getCombinations', () => {
  expect(getCombinations([1, 2, 3]))
    .toEqual([[3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]);
});

test('solution', () => {
  expect(solution([
    ["100","ryan","music","2"],
    ["200","apeach","math","2"],
    ["300","tube","computer","3"],
    ["400","con","computer","4"],
    ["500","muzi","music","3"],
    ["600","apeach","music","2"]
  ])).toBe(2);
  expect(solution([
    ['b','2','a','a','b'],
    ['b','2','7','1','b'],
    ['1','0','a','a','8'],
    ['7','5','a','a','9'],
    ['3','0','a','f','9'],
  ])).toBe(5);
});
