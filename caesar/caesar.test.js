const caesar = require("./caesar");

test("function is defined", () => {
  expect(caesar("hello")).toBeDefined();
});

test("works with blank string", () => {
  expect(caesar("")).toBe("");
});

test("Works with low number", () => {
  expect(caesar("Hello", 1)).toBe("Ifmmp");
});

test("Works with spaces", () => {
  expect(caesar("Hello World", 1)).toBe("Ifmmp Xpsme");
});

test("Works with puncuation", () => {
  expect(caesar("Hello World!", 1)).toBe("Ifmmp Xpsme!");
});

test("Works with negative numbers", () => {
  expect(caesar("Hello", -1)).toBe("Gdkkn");
});

test("Works with large numbers", () => {
  expect(caesar("Hello", 500)).toBe("Nkrru");
});
