const solution = (routes) => { 
  let count = 0;
  let endOrderedRoutes = routes
    .map(route => ({ start: route[0], end: route[1] }))
    .sort((a, b) => a.end - b.end);
  
  while (endOrderedRoutes.length > 0) {
    const targetRoute = endOrderedRoutes[0];
    endOrderedRoutes = endOrderedRoutes.filter(route => route.start > targetRoute.end);
    count += 1;
  }

  return count;
};

test('solution', () => {
  expect(solution([[-20, 15], [-14, -5], [-18, -13], [-5, -3]])).toBe(2);
});
