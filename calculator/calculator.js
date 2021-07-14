const Calculator = {
  add: (a, b) => {
    if (typeof a != "number" || typeof b != "number") {
      return new Error("must enter two numbers as parameters");
    }
    return a + b;
  },
  subtract: (a, b) => {
    if (typeof a != "number" || typeof b != "number") {
      return new Error("must enter two numbers as parameters");
    }
    return a - b;
  },
  multiply: (a, b) => {
    if (typeof a != "number" || typeof b != "number") {
      return new Error("must enter two numbers as parameters");
    }
    return a * b;
  },
  divide: (a, b) => {
    if (typeof a != "number" || typeof b != "number") {
      return new Error("must enter two numbers as parameters");
    }
    return a / b;
  },
};

module.exports = Calculator;
