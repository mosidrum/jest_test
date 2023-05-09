const checkLengthOfString = require('./Task1');

test('lets check for the length of the string', () => {
  expect(checkLengthOfString('Hello')).toBe(5);
});

test('lets check if the input is not a string', () => {
  expect(() => {
    checkLengthOfString(111);
  }).toThrow(Error);
});

test('lets check if there is no string or the string is less the 1', () => {
  expect(() => {
    checkLengthOfString('');
  }).toThrow(Error);
});

test('lets check if string is more than 10 characters', () => {
  expect(() => {
    checkLengthOfString('Hello my name is Ayodele Isaac');
  }).toThrow(Error);
});
