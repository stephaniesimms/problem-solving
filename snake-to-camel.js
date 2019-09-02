// Given a variable name in snake_case, return a string with that variable name written in camelCase.

function snakeToCamel(str) {
  let wordArr = str.split('_');
  let result = wordArr[0];

  for (let i = 1; i < wordArr.length; i++) {
    let upper = wordArr[i][0].toUpperCase();
    let restOfWord = wordArr[i].slice(1);
    let upperWord = upper + restOfWord;
    result += upperWord;
  }
  return result;
}

module.exports = snakeToCamel;