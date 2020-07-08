const solution = (msg) => {
  const answer = [];
  const dictionary = makeAlphabetMap();

  const characters = msg.split("");
  let characterBundles = [];
  let priviousBundles;

  for (let i = 0; i < characters.length; i += 1) {
    characterBundles.push(characters[i]);
    
    const currentBundles = characterBundles.join("");
    if (!dictionary.has(currentBundles)) {
      setNewElementToDictionary(dictionary, currentBundles);
      
      answer.push(dictionary.get(priviousBundles));
      
      characterBundles = [];
      i -= 1;
    }

    priviousBundles = currentBundles;
  }

  const remainedCharacter  = characterBundles.join("");
  answer.push(dictionary.get(remainedCharacter));
  
  return answer;
};

const setNewElementToDictionary = (dictionary, currentBundles) => {
  dictionary.set(currentBundles, dictionary.size + 1);
}

const makeAlphabetMap = () => {
  const map = new Map();

  for (let i = 65; i <= 90; i += 1) {
    map.set(String.fromCharCode(i), i - 64);
  }

  return map;
}

test('solution', () => {
  expect(solution("KAKAO")).toEqual([11, 1, 27, 15]);
  expect(solution("TOBEORNOTTOBEORTOBEORNOT"))
    .toEqual([20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]);
});
