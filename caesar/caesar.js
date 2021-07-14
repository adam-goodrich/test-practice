const caesar = (string, num) => {
  let result = [];
  let stringArray = string.split("");
  let newAsciiNum;
  if (num < 0) {
    num = (num % 26) + 26;
  }
  let asciiMappedList = stringArray.map((char) => char.charCodeAt());
  asciiMappedList.forEach((charNum) => {
    if (charNum >= 65 && charNum <= 90) {
      charNum = charNum - 65;
      newAsciiNum = (charNum + num) % 26;
      result.push(String.fromCharCode(newAsciiNum + 65));
    } else if (charNum >= 97 && charNum <= 122) {
      charNum = charNum - 97;
      newAsciiNum = (charNum + num) % 26;
      result.push(String.fromCharCode(newAsciiNum + 97));
    } else {
      result.push(String.fromCharCode(charNum));
    }
  });
  return result.join("");
};

module.exports = caesar;
