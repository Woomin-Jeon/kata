const solution = (jobs) => {
  let tasks = jobs
    .map(job => ({ reqTime: job[0], workTime: job[1] }))
    .sort((a, b) => a.reqTime - b.reqTime);
  let currentWorking = null;
  const ready = [];
  const workingTimes = [];

  let time = 0;
  while (true) {
    if (currentWorking && currentWorking.fireTime === time) {
      const workingTime = currentWorking.fireTime - currentWorking.reqTime;
      workingTimes.push(workingTime);
      currentWorking = null;
    }

    if (tasks.length === 0 && ready.length === 0 && !currentWorking) {
      const totalWorkingTime = workingTimes.reduce((acc, cur) => acc + cur, 0);

      return Math.floor(totalWorkingTime / jobs.length);
    }
    
    const requestedTasks = tasks.filter(task => task.reqTime === time);
    tasks = tasks.filter(task => task.reqTime !== time);

    ready.push(...requestedTasks);

    if (!currentWorking && ready.length > 0) {
      ready.sort((a, b) => a.workTime - b.workTime);
      const target = ready.shift();

      currentWorking = { ...target, fireTime: time + target.workTime };
    }

    time += 1;
  }
};

test('solution', () => {
  expect(solution([[0, 3], [1, 9], [2, 6]])).toBe(9);
  expect(solution([[0, 3], [1, 9], [2, 6], [30, 4]])).toBe(7);
});
