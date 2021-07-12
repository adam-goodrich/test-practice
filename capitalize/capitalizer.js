function capitalizer(string) {
  if (typeof string != "string") {
    return "You must provide a string";
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalizer;
