const captilized = require('./Task4');

test('check if the first string is a capital letter', () => {
  expect(captilized('isaac')).toBe('Isaac');
});
