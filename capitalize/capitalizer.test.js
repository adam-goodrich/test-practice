const capitalizer = require("./capitalizer");

test("Function is defined", () => {
  expect(capitalizer("hello")).toBeDefined();
});

test("Returns a string", () => {
  expect(typeof capitalizer("hello")).toBe("string");
});

test("Alerts if no args", () => {
  expect(capitalizer()).toBe("You must provide a string");
});

test("Alerts if boolean", () => {
  expect(capitalizer(true)).toBe("You must provide a string");
});

test("Alerts if null", () => {
  expect(capitalizer(null)).toBe("You must provide a string");
});

test("Alerts if undefined", () => {
  expect(capitalizer(undefined)).toBe("You must provide a string");
});

test("Alerts if nan", () => {
  expect(capitalizer(NaN)).toBe("You must provide a string");
});

test("Numbers should not work", () => {
  expect(capitalizer(3)).toBe("You must provide a string");
});

test("First letter of string should be changed to capitalized", () => {
  expect(capitalizer("hello")).toBe("Hello");
});

test("First letter of string should stay capitalized", () => {
  expect(capitalizer("Hello")).toBe("Hello");
});

test("test empty string", () => {
  expect(capitalizer("")).toBe("");
});

test("test large string", () => {
  expect(
    capitalizer(
      "it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    )
  ).toBe(
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  );
});
