const Calculator = require("./calculator");

test("Not enetering parameters gives error message", () => {
  expect(() => new Calculator.add()).toThrow(Error);
});

test("Add function is defined", () => {
  expect(Calculator.add(1, 2)).toBeDefined();
});

test("Add function adds correctly", () => {
  expect(Calculator.add(1, 2)).toBe(3);
});

test("Subtract function is defined", () => {
  expect(Calculator.add(4, 2)).toBeDefined();
});

test("Subtract function subtracts correctly", () => {
  expect(Calculator.subtract(4, 2)).toBe(2);
});

test("Multiply function is defined", () => {
  expect(Calculator.multiply(2, 2)).toBeDefined();
});

test("Multiply function multiplies correctly", () => {
  expect(Calculator.multiply(3, 2)).toBe(6);
});

test("Divide function is defined", () => {
  expect(Calculator.divide(2, 2)).toBeDefined();
});

test("Divide function divides correctly", () => {
  expect(Calculator.divide(4, 2)).toBe(2);
});
