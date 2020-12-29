const solution = (tickets) => {
  const result = [];
  searchPath(result, tickets, ['ICN']);

  return result.sort()[0];
};

const searchPath = (result, tickets, pathes) => {
  const currentPoint = pathes[pathes.length - 1];
  const ableDestinations = tickets.filter(([startPoint, _]) => startPoint === currentPoint);

  if (ableDestinations.length === 0 && tickets.length === 0) {
    result.push(pathes);
    return;
  }

  ableDestinations.forEach(able => {
    const remainedTickets = filterOnce(tickets, ticket => ticket.toString() === able.toString());

    searchPath(result, remainedTickets, [...pathes, able[1]]);
  })
}

const filterOnce = (arr, callback) => {
  const copy = [...arr];
  const index = arr.findIndex(callback);
  copy.splice(index, 1);

  return copy;
}

test('filterOnce', () => {
  expect(filterOnce([1, 2, 3], v => v === 2)).toEqual([1, 3]);
  expect(filterOnce([1, 2, 2, 3], v => v === 2)).toEqual([1, 2, 3]);
})

test('solution', () => {
  expect(solution([
    ['ICN', 'JFK'], ['HND', 'IAD'], ['JFK', 'HND']
  ])).toEqual(['ICN', 'JFK', 'HND', 'IAD']);
  expect(solution([
    ['ICN', 'SFO'], ['ICN', 'ATL'], ['SFO', 'ATL'], ['ATL', 'ICN'], ['ATL','SFO']
  ])).toEqual(['ICN', 'ATL', 'ICN', 'SFO', 'ATL', 'SFO']);
});
