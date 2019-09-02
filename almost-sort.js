// This function takes an almost sorted array with two numbers out of order.
// It finds the two unsorted numbers, swaps them, and returns a sorted array, within specified time and space constraints.

// Time comlexity O(n): use a left pointer to find the left index of element to swap
function findLeft(arr) {
  let leftIdx = 0;
  let left = 0;

  while (left < arr.length - 1) {
    if (arr[left + 1] < arr[left]) {
      leftIdx = left;
      break;
    }
    left++;
  }
  return leftIdx;
}

// Time comlexity O(n): use a right pointer to find the right index of element to swap
function findRight(arr) {
  let rightIdx = arr.length - 1;
  let right = arr.length - 1;

  while (0 < right) {
    if (arr[right - 1] > arr[right]) {
      rightIdx = right;
      break;
    }
    right--;
  }
  return rightIdx;
}

// Time complexity O(n): check for already sorted array
function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      return false;
    }
  }
  return true;
}

// Use Tower of Hanoi with array modification in place to get O(1) space complexity
function swap(arr, leftIdx, rightIdx) {
  let temp = arr[leftIdx];
  arr[leftIdx] = arr[rightIdx];
  arr[rightIdx] = temp;
}

// Main function swaps the left and right elements and returns a sorted array
function almostSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  if (isSorted(arr)) {
    return arr;
  }

  let leftIdx = findLeft(arr);
  let rightIdx = findRight(arr);
  swap(arr, leftIdx, rightIdx);
  return arr;
}

module.exports = almostSort;
