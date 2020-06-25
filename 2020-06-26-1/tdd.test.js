const solution = (m, musicinfos) => {
  const targetMusicCode = convertSharp(m);

  const noSharpMusicInfos = musicinfos.map(v => {
    const elements = v.split(",");
    elements[3] = convertSharp(elements[3]);
    
    return elements.join(",");
  });
  const objectMusicInfos = noSharpMusicInfos.map((v, i) => convertElementToObject(v, i));
  const matchedMusics = objectMusicInfos.filter(v => v.code.join("").includes(targetMusicCode));
  sortByPlayTimeAndIndex(matchedMusics);
  
  return matchedMusics.length === 0 ? `(None)` : matchedMusics[0].name;
};

const convertSharp = (code) => {
  let result;

  result = code.replace(/C#/g, 'H');
  result = result.replace(/D#/g, 'I');
  result = result.replace(/F#/g, 'J');
  result = result.replace(/G#/g, 'K');
  result = result.replace(/A#/g, 'L');
  
  return result;
}

const convertElementToObject = (str, index) => {
  const elements = str.split(",");
  const playTime = getPlayTime(elements[0], elements[1])
  const name = elements[2];
  const musicCode = elements[3].split("");
  const code = fillCodeByPlayTime(musicCode, playTime)

  return { index, name, playTime, code };
}

const getPlayTime = (start, end) => {
  const startTimeHours = Number(start.split(":")[0]);
  const startTimeMinuts = Number(start.split(":")[1]);

  const endTimeHours = Number(end.split(":")[0]);
  const endTimeMinuts = Number(end.split(":")[1]);

  return ((endTimeHours * 60) + endTimeMinuts) - ((startTimeHours * 60) + startTimeMinuts);
}

const fillCodeByPlayTime = (musicCode, playTime) => {
  let code = [];
  if (musicCode.length >= playTime) {
    code = musicCode.slice(0, playTime);
  } else {
    const time = parseInt(playTime / musicCode.length);
    const alpha = playTime % musicCode.length;

    for (let i = 0; i < time; i += 1) {
      code.push(...musicCode);
    }
    
    code.push(...musicCode.slice(0, alpha));
  }
  return code;
}

const sortByPlayTimeAndIndex = (musics) => {
  musics.sort((a, b) => {
    if (a.playTime > b.playTime) {
      return false;
    }
    
    if (a.playTime < b.playTime) {
      return true;
    }
    
    return sortbyIndex(a, b);
  }); 
}

const sortbyIndex = (a, b) => {
  if (a.index < b.index) {
    return false;
  }
  
  return true;
}

test('convertSharp', () => {
  expect(convertSharp("C#CD#DF#FG#GA#A")).toBe("HCIDJFKGLA");
});

test('convertElementToObject', () => {
  expect(convertElementToObject("12:00,12:10,HELLO,CDEF", 1)).toEqual({
    index: 1,
    name: "HELLO",
    playTime: 10,
    code: ['C', 'D', 'E', 'F', 'C', 'D', 'E', 'F', 'C', 'D'],
  })
});

test('getPlayTime', () => {
  expect(getPlayTime("12:11", "12:31")).toBe(20);
  expect(getPlayTime("12:11", "13:11")).toBe(60);
});

test('solution', () => {
  expect(solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"])).toBe("WORLD");
});
