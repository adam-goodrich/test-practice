const arrayAnalysis = (array) => {
  const average = array.reduce((a, b) => a + b, 0) / array.length;
  const sorted = array.sort((a, b) => a - b);
  const object = {
    average: average,
    min: sorted[0],
    max: sorted[sorted.length - 1],
    length: sorted.length,
  };
  return object;
};

module.exports = arrayAnalysis;
