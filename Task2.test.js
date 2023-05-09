const reversed = require('./Task2');

test('lets check if the input is not a string', () => {
  expect(() => {
    reversed(111);
  }).toThrow(Error);
});

test('lets check if a string is revered', () => {
  expect(reversed('Hello')).toBe('olleH');
});
