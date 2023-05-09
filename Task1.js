function checkLengthOfString(string) {
 
  if (string.length < 1) {
    throw new Error('String is must not be less than 1');
  }
  if (string.length > 10) {
    throw new Error('Its more than 10 characters');
  }
  if (typeof string !== 'string') {
    throw new Error('your input is not a string');
  }
  return string.length;
}

module.exports = checkLengthOfString;