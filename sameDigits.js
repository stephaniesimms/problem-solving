// Evaluates whether two positive integers contain the same frequency of digits and returns a boolean

// Main function compares the num frequency objects (num digits and counts) in each input num 
function sameDigits(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return NaN;
  }

  let obj1 = countFrequency(num1);
  let obj2 = countFrequency(num2);

  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

// Helper function counts the frequency of num digits in each input num 
function countFrequency(num) {
  let obj = {};
  let numStr = num.toString();

  for (let num of numStr) {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num]++;
    }
  }
  return obj;
}

module.exports = sameDigits;