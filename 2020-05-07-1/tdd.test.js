const solution = (genres, plays) => {
  const map = new Map();
  const totalByGenreMap = new Map();
  const popularGenres = [];
  const bestAlbum = [];

  insertElementIntoTheMap(map, genres, plays);
  sumElementsByGenre(totalByGenreMap, genres, plays);
  extractPopularGenre(totalByGenreMap, popularGenres);
  makeBestAlbum(bestAlbum, popularGenres, map);

  return bestAlbum.map(v => v[0]);
};

const insertElementIntoTheMap = (map, genres, plays) => {
  genres.forEach((v, i) => map.set(i, [v, plays[i]]));
}

const sumElementsByGenre = (totalByGenreMap, genres, plays) => {
  genres.forEach((v, i) => {
    const alreadyExistentValue = totalByGenreMap.get(v);

    alreadyExistentValue
      ? totalByGenreMap.set(v, alreadyExistentValue + plays[i])
      : totalByGenreMap.set(v, plays[i]);
  });
}

const extractPopularGenre = (totalByGenreMap, popularGenres) => {
  totalByGenreMap.forEach((value, key) => popularGenres.push([key, value]));
  popularGenres.sort((a, b) => b[1] - a[1]);
};

const makeBestAlbum = (bestAlbum, popularGenres, map) => {
  popularGenres.forEach((v, i) => {
    const specificGenre = [];
    
    map.forEach((value, key) => {
      if (value[0] === v[0]) {
        specificGenre.push([key, value]);
      }
    });
    
    specificGenre.sort((a, b) => b[1][1] - a[1][1]);
    
    specificGenre.length === 1
      ? bestAlbum.push(specificGenre[0])
      : bestAlbum.push(specificGenre[0], specificGenre[1]);
  });
}

test('solution', () => {
  expect(solution(
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500]
  )).toEqual([4, 1, 3, 0]);
});
