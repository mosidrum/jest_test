const Calculator = require('./Task3')

describe('Calculator', () => {
  const calculator = new Calculator();

  test('multiply numbers', () => {
    expect(calculator.mul(2, 2)).toBe(4);
  });

  test('divide numbers', () => {
    expect(calculator.div(100, 10)).toBe(10);
  });

  test('no division with zero', () => {
    expect(() => {
      calculator.div(9, 0);
    }).toThrow(Error);
  });

  test('add numbers', () => {
    expect(calculator.add(5, 5)).toBe(10);
  });

  test('substract numbers', () => {
    expect(calculator.sub(9, 8)).toBe(1);
  });
});