class Calculator {
  mul(x, y) {
    return x * y;
  }

  div(x, y) {
    if (y === 0) {
      throw new Error('Cannot divide by zero');
    }
    return x / y;
  }

  add(x, y) {
    return x + y;
  }

  sub(x, y) {
    return x - y;
  }

 
}

module.exports = Calculator;