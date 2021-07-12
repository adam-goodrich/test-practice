const reverseString = (string) => {
  if (typeof string != "string") {
    return "You must provide a string";
  }
  return string.split("").reverse().join("");
};
module.exports = reverseString;
