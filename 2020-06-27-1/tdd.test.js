const solution = (files) => {
  const fileTypes = files.map((v, i) => makeUsefulObject(v, i));
  return sortFileNamesByType(fileTypes);
};

const makeUsefulObject = (fileName, index) => {
  const head = findHead(fileName).toUpperCase();
  const number = findNumber(fileName);
  const name = fileName;

  return { head, number, index, name };
}

const findHead = (fileName) => fileName.split(/[0-9]/g)[0];

const findNumber = (fileName) => Number(fileName.split(/[^0-9]/g).filter(v => v)[0]);

const sortFileNamesByType = (fileTypes) => {
  fileTypes.sort((a, b) => {
    if (a.head < b.head) {
      return -1;
    }
    if (a.head > b.head) {
      return 1;
    }

    if (a.number < b.number) {
      return -1;
    }
    if (a.number > b.number) {
      return 1;
    }

    if (a.index > b.index) {
      return 1;
    }
    if (a.index < b.index) {
      return -1;
    }
  });

  return fileTypes.map(v => v.name);
}

test('makeUsefulObject', () => {
  expect(makeUsefulObject("img019aa2.png", 1))
    .toEqual({ head: "IMG", number: 19, index: 1, name: "img019aa2.png" });
});

test('findNumber', () => {
  expect(findNumber("img0012.png")).toBe(12);
  expect(findNumber("img12aa2.png")).toBe(12);
  expect(findNumber("img12.png")).toBe(12);
});

test('findHead', () => {
  expect(findHead("img12.png")).toBe("img");
});

test('solution', () => {
  expect(solution(
    ['img12.png', 'img10.png', 'img02.png', 'imh02.png' ,'img1.png', 'IMG01.GIF', 'img2.JPG'],
  )).toEqual(['img1.png', 'IMG01.GIF', 'img02.png', 'img2.JPG', 'img10.png', 'img12.png', 'imh02.png']);
});
