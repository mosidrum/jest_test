function reversed(string) {
  if (typeof string !== 'string') {
    throw new Error('what you entered is not a string!');
  }
  return string.split('').reverse().join('');
}

module.exports = reversed;