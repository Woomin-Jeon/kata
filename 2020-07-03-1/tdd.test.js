const solution1 = (skill, trees) => {
  const regex = new RegExp(`[^${skill}]`, 'g');
  const refinedTrees = trees.map(v => v.replace(regex, ""));

  return refinedTrees.filter(v => {
    const difference = skill.length - v.length;
    const regex = new RegExp(`${v}.{${difference}}`, 'g');
    return skill.match(regex);
  }).length;
};

test('solution1', () => {
  expect(solution1("CBD", ["BACDE", "CBADF", "AECB", "BDA"])).toBe(2);
});




const solution2 = (skill, trees) => trees.filter(v => isCorrectSkillTree(skill, v)).length;

const isCorrectSkillTree = (skill, tree) => {
  const antecedentSkill = skill.split("");
  const skills = tree.split("");
  const stack = []

  while (skills.length > 0) {
    const targetSkill = skills.shift();
    
    const index = antecedentSkill.findIndex(v => v === targetSkill);
    
    if (index < 0) {
      continue;
    }

    if (index !== stack.length) {
      return false;
    }

    stack.push(targetSkill);
  }

  return true;
}

test('isCorrectSkillTree', () => {
  expect(isCorrectSkillTree('CBD', "BACDE")).toBe(false);
  expect(isCorrectSkillTree('CBD', "CBADF")).toBe(true);
  expect(isCorrectSkillTree('CBD', "AECB")).toBe(true);
});

test('solution2', () => {
  expect(solution2("CBD", ["BACDE", "CBADF", "AECB", "BDA"])).toBe(2);
});
