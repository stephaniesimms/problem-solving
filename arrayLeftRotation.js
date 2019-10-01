/** https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem
 A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if 2 left rotations are performed on array [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2].

Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

Sample Input
5 4
1 2 3 4 5

Sample Output
5 1 2 3 4
*/

function rotLeft(a, d) {
  let array = [];
  let initNum = a - d;

  for (let i = initNum; i <= a; i++) {
    array.push(i);
  }
  for (let j = 0; j < d; j++) {
    let elem = array.shift();
    array.push(elem);
  }
  return array.join(' ');
}

console.log(rotLeft(5, 4))