/* 
This function accepts two strings and checks whether the characters in the first string appear in the second string, in the same order.
It's okay if they're interrupted by other characters in the second string.
Use two pointers to loop from the beginning to end of each string and compare each char. 
If the pointer in the longer string finds a char match in the shorter string, both pointers advance.
If there is no match at that char index then only the pointer for the longer string advances.
Returns true if the pointer for the shorter string reaches the end, signaling that all chars in that string were present in the longer string.
*/

function charsInOrder(str1, str2) {
  if (str1 === '') {
    return true;
  }
  if (str2 === '') {
    return false;
  }

  let maxString = str2;
  let minString = str1;

  let maxPointer = 0;
  let minPointer = 0;

  while (maxPointer < maxString.length) {
    let maxChar = maxString[maxPointer];
    if (maxChar === minString[minPointer]) {
      minPointer++
    }
    maxPointer++;
  }
  return minPointer === minString.length;
}

module.exports = charsInOrder;