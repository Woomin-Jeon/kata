const solution = (user_id, banned_id) => {
  const userCases = getUserCases(banned_id, user_id);

  const answer = [];
  findCorrectCase(userCases, 0, answer, [])
  answer.forEach(v => v.sort());
  answer.sort();

  const stringAnswer = answer.map(v => v.toString());
  const set = new Set(stringAnswer);

  return set.size;
}

const findCorrectCase = (userCases, time, answer, filling) => {
  const currentUserCase = userCases[time];

  if (filling.length === userCases.length) {    
    answer.push(filling);
    return;
  }

  if (!currentUserCase) {
    return;
  }

  currentUserCase.forEach(user => {
    if (filling.includes(user)) {
      return;
    }
    
    const currentFilling = filling.slice();
    currentFilling.push(user);

    findCorrectCase(userCases, time + 1, answer, currentFilling);
  });
};

const getUserCases = (banned_id, user_id) => {
  const userCases = [];

  banned_id.forEach(banned => {
    const bundle = [];
  
    user_id.forEach(user => {
      if (checkId(banned, user)) {
        bundle.push(user);
      }  
    });
  
    userCases.push(bundle);
  });

  return userCases;
}

const checkId = (criteria, target) => {
  const criteriaArr = criteria.split("");
  const targetArr = target.split("");

  if (criteria.length !== target.length) {
    return false;
  }

  for (let i = 0; i < criteriaArr.length; i += 1) {
    if (criteriaArr[i] === "*") {
      continue;
    }

    if (criteriaArr[i] !== targetArr[i]) {
      return false;
    }
  }

  return true;
}

test('getUserCases', () => {
  expect(getUserCases(['*rodo', '*rodo', '******'], ['frodo', 'fradi', 'crodo', 'abc123', 'frodoc']))
    .toEqual([['frodo', 'crodo'], ['frodo', 'crodo'], ['abc123', 'frodoc']]);
});

test('checkId', () => {
  expect(checkId("*rodo", "frodo")).toBe(true);
  expect(checkId("*rodoo", "frodo")).toBe(false);
  expect(checkId("cr*do", "frodo")).toBe(false);
});

test('solution', () => {
  expect(solution(
    ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    ["fr*d*", "abc1**"])).toBe(2);
  expect(solution(
    ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    ["*rodo", "*rodo", "******"])).toBe(2);
  expect(solution(
    ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    ["fr*d*", "*rodo", "******", "******"])).toBe(3);
  expect(solution(
    ["frodo", "crodo", "crido", 'frido'],
    ["fr*do", "*rodo", "cr*do"])).toBe(4);
});
