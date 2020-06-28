const solution = (lines) => {
  const timeLines = lines.map(v => getTimeLineByMilliseconds(v));

  const answer = []
  timeLines.forEach(v => {
    const startOfRange = v.end - 1;
    const endOfRange = startOfRange + 1000;

    let count = 0;
    timeLines.forEach(t => {
      if (startOfRange <= t.start && t.start <= endOfRange
          || startOfRange <= t.end && t.end <= endOfRange
          || t.start <= startOfRange && t.end >= endOfRange
          || startOfRange <= t.start && t.end <= endOfRange) {
        count += 1;
      }
    });
    answer.push(count);
    count = 0;
  })

  return Math.max(...answer);  
};

const getTimeLineByMilliseconds = (line) => {
  const arr = line.split(" ");
  const T = arr[1].split(":");
  const S = Number(arr[2].replace(/s/g, "")) * 1000 - 1;
  
  const hours = Number(T[0]);
  const minuts = Number(T[1]);
  const seconds = Number(T[2]);

  const end = (hours * 3600 + minuts * 60 + seconds) * 1000;    
  const start = end - S;

  return { start, end };
}

test('getTimeLineByMilliseconds', () => {
  expect(getTimeLineByMilliseconds("2016-09-15 03:10:33.020 0.011s")).toEqual({ start: 11433010, end: 11433020 });
});

test('solution', () => {
  expect(solution(
    [
      "2016-09-15 20:59:57.421 0.351s",
      "2016-09-15 20:59:58.233 1.181s",
      "2016-09-15 20:59:58.299 0.8s",
      "2016-09-15 20:59:58.688 1.041s",
      "2016-09-15 20:59:59.591 1.412s",
      "2016-09-15 21:00:00.464 1.466s",
      "2016-09-15 21:00:00.741 1.581s",
      "2016-09-15 21:00:00.748 2.31s",
      "2016-09-15 21:00:00.966 0.381s",
      "2016-09-15 21:00:02.066 2.62s"
    ]
  )).toBe(7);
});
