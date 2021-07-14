const caesar = require("./caesar");

test("function is defined", () => {
  expect(caesar("hello")).toBeDefined();
});

test("function is defined", () => {
  expect(caesar("")).toBe("");
});

test("function is defined", () => {
  expect(caesar("Hello World!", 1)).toBe("Ifmmp Xpsme!");
});
