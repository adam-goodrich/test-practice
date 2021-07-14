const caesar = require("./caesar");

test("function is defined", () => {
  expect(caesar("hello")).toBeDefined();
});

test("works with blank string", () => {
  expect(caesar("", 3)).toBe("");
});

test("works with blank string no numbers", () => {
  expect(caesar("")).toBe("Must enter a number as second parameter");
});

test("works with blank string and nan as second parameter", () => {
  expect(caesar("hello", false)).toBe(
    "Must enter a number as second parameter"
  );
});

test("no string gives warning", () => {
  expect(caesar()).toBe("Must enter a string");
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
