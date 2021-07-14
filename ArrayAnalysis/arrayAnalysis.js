const arrayAnalysis = (array) => {
  if (!Array.isArray(array)) {
    return "must provide an array";
  }
  if (array.length == 0) {
    return {
      average: 0,
      min: 0,
      max: 0,
      length: 0,
    };
  }
  const average = array.reduce((a, b) => a + b, 0) / array.length;
  const sorted = array.sort((a, b) => a - b);
  return {
    average: average,
    min: sorted[0],
    max: sorted[sorted.length - 1],
    length: sorted.length,
  };
};

module.exports = arrayAnalysis;
