const solution = (genres, plays) => {
  const playlist = genres.map((genre, i) => ({ genre, playCount: plays[i], id: i }));
  const genreMap = {};

  playlist.forEach(({ id, genre, playCount }) => {
    if (!genreMap[genre]) {
      genreMap[genre] = { playCount, musics: [{ id, playCount }] };
      return;
    }

    genreMap[genre].playCount += playCount;
    genreMap[genre].musics.push({ id, playCount });
  });

  const genresOrderedByPlayCount = 
    Object.keys(genreMap).sort((a, b) => genreMap[b].playCount - genreMap[a].playCount);
  const answer = genresOrderedByPlayCount.map(genre => {
    const musics = genreMap[genre].musics;
    const musicsOrderedByPlayCount = musics.sort((a, b) => b.playCount - a.playCount);

    return musicsOrderedByPlayCount.slice(0, 2).map(v => v.id);
  });
  
  return answer.flat();
};

test('solution', () => {
  expect(solution(
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500],
  )).toEqual([4, 1, 3, 0]);
});
