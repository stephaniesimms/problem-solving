/**Given an array of 1s and 0s which has all 1s first followed by all 0s, 
write a function called countZeroes, which returns the number of zeroes in the array.

Constraints: Time Complexity: O(log N)

Examples:
countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0 
*/

// find middle index, start 0 and end indices
// use binary search to check if middle index is zeroIdx
// when i find zeroIdx calculate count of zeros
// return count = arr.length - zeroIdx

function countZeroes(arr) {
  let startIdx = 0;
  let endIdx = arr.length - 1;
  let zeroIdx = 0;
  let count = 0;

  if (arr[endIdx] === 1) {
    return 0;
  }

  while (startIdx <= endIdx) {
    let midIdx = Math.floor((endIdx + startIdx) / 2);
    let right = arr[midIdx];
    let left = arr[midIdx - 1];
    if (left !== right) {
      return arr.length - midIdx;
    }
    if (right === 1) {
      startIdx = midIdx;
    } else {
      endIdx = midIdx;
    }
  }
  count = arr.length - zeroIdx;
  return count;
}

  


module.exports = countZeroes