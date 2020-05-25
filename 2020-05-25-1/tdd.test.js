const solution = (tickets) => {
  const result = [];
  navigateRoute(result, 'ICN', tickets, []);
  result.sort();
  return result[0];
};

const navigateRoute = (result, start, tickets, route) => {
  if (tickets.length === 0) {
    result.push([...route, start]);
    return;
  }

  const destinations = tickets.filter(ticket => ticket[0] === start);

  destinations.forEach(destination => {
    const newTickets = tickets.filter(ticket => ticket !== destination);
    navigateRoute(result, destination[1], newTickets, [...route, start]);
  })
};

test('solution', () => {
  expect(solution([['ICN', 'JFK'], ['HND', 'IAD'], ['JFK', 'HND']])).toEqual(['ICN', 'JFK', 'HND', 'IAD']);
  expect(solution([['ICN', 'SFO'], ['ICN', 'ATL'], ['SFO', 'ATL'], ['ATL', 'ICN'], ['ATL','SFO']])).toEqual(['ICN', 'ATL', 'ICN', 'SFO', 'ATL', 'SFO']);
});
