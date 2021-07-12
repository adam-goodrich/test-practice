const reverseString = require("./reverseString");

test("Function is defined", () => {
  expect(reverseString("hello")).toBeDefined();
});

test("Function is defined", () => {
  expect(reverseString("hello")).toBe("olleh");
});
