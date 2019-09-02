/* 
Helper function accepts the input grid array and returns a new array of 
paired row and column indices for each * , e.g. [[1,1], [2,2]]
*/

function getAllStarCoordinates(arr) {
  let coordArr = [];
  let numRows = arr.length;
  let numCols = arr[0].length; // All rows have same length, so can just use zeroth row

  for (let rowIdx = 0; rowIdx < numRows; rowIdx++) {
    for (let colIdx = 0; colIdx < numCols; colIdx++) {
      if (arr[rowIdx][colIdx] === "*") {
        coordArr.push([rowIdx, colIdx]);
      }
    }
  }
  return coordArr;
}

/* Main function loops through each row and column of the grid array. 
This is wrapped in an outer loop of * coordinate pairs.
For each coordinate pair containing a * the function reassigns the elements
in that row/column with *'s. It returns the original modified array.
*/
function starOutGrid(arr) {
  let numRows = arr.length;
  let numCols = arr[0].length;
  let coords = getAllStarCoordinates(arr);

  for (let coord of coords) {

    for (let rowIdx = 0; rowIdx < numRows; rowIdx++) {
      for (let colIdx = 0; colIdx < numCols; colIdx++) {
        if (rowIdx === coord[0] || colIdx === coord[1]) {
          arr[rowIdx][colIdx] = '*';
        }
      }
    }
  }
  return arr;
}

module.exports = starOutGrid;