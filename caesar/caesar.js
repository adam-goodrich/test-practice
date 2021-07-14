const caesar = (string, num) => {
  let result = [];
  let stringArray = string.split("");
  let ascii_mapped_list = [];
  let newAsciiNum;
  if (num < 0) {
    num = (num % 26) + 26;
  }
  stringArray.forEach((char) => ascii_mapped_list.push(char.charCodeAt()));
  ascii_mapped_list.forEach((char, index) => {
    if (char >= 65 && char <= 90) {
      char = char - 65;
      newAsciiNum = (char + num) % 26;
      result.push(String.fromCharCode(newAsciiNum + 65));
    } else if (char >= 97 && char <= 122) {
      char = char - 97;
      newAsciiNum = (char + num) % 26;
      result.push(String.fromCharCode(newAsciiNum + 97));
    } else {
      result.push(String.fromCharCode(char));
    }
  });
  return result.join("");
};

module.exports = caesar;
