const caesar = require("./caesar");

test("function is defined", () => {
  expect(caesar("hello")).toBeDefined();
});
