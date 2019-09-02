// Function accepts a number and converts it into a string formatted with commas
// Example input: -3141592.65 > output:	“-3,141,592.65”
function addCommas(num) {
  let numString = num.toString().split('.');
  let preDotNum = Math.abs(numString[0]);
  let sign = Math.sign(numString[0]);

  let numWithCommas = insertCommasHelper(preDotNum);

  // handle negative number inputs
  if (sign === -1) {
    numWithCommas = '-' + numWithCommas;
  }
  // if the input num contains a decimal, join on '.'
  if (numString.length === 2) {
    return [numWithCommas, numString[1]].join('.');
  } else {
    return numWithCommas;
  }
}

// helper function inserts commas into the correct portion of the number string
// returns it to the main function to handle negative numbers and decimals
function insertCommasHelper(num) {
  let numArr = num.toString().split('').reverse();

  for (let i = 3; i < numArr.length; i += 4) {
    numArr.splice(i, 0, ',');
  }
  return numArr.reverse().join('');
}

module.exports = addCommas;