const reverseString = require("./reverseString");

test("Function is defined", () => {
  expect(reverseString("hello")).toBeDefined();
});

test("Alerts if no args", () => {
  expect(reverseString()).toBe("You must provide a string");
});

test("Alerts if boolean", () => {
  expect(reverseString(true)).toBe("You must provide a string");
});

test("Alerts if null", () => {
  expect(reverseString(null)).toBe("You must provide a string");
});

test("Alerts if undefined", () => {
  expect(reverseString(undefined)).toBe("You must provide a string");
});

test("Alerts if nan", () => {
  expect(reverseString(NaN)).toBe("You must provide a string");
});

test("Numbers should not work", () => {
  expect(reverseString(3)).toBe("You must provide a string");
});

test("Function is defined", () => {
  expect(reverseString("hello")).toBe("olleh");
});
