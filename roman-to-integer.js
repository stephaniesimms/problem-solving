// Returns the integer value for a converted roman numeral string
// I solved this problem previously for HackReactor Prep

function romanToInteger(roman) {
  let result = 0;
  let conversion = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  if (typeof roman !== "string") {
    return NaN;
  }
  for (let i = 0; i < roman.length; i++) {
    let numeral = roman[i];
    let nextNumeral = roman[i + 1];
    if (conversion[numeral] < conversion[nextNumeral]) {
      result += conversion[nextNumeral] - conversion[numeral];
      i += 1;
    } else {
      result += conversion[numeral];
    }
  }
  return result;
}


module.exports = romanToInteger;