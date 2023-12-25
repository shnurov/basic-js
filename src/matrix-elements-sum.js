const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let matrix2 = matrix;
  let arr = []
for (let i = 0; i < matrix.length; i++) {
  for (let k = 0; k < matrix[i].length; k++) {
    if (matrix[i][k] === 0 && i < matrix.length - 1) {
      matrix2[i+1][k] = 0;
    }
  }
  }
  let count = 0;

  for (arr of matrix2) {
    for (num of arr) {
      if (num > 0) count += num;
    }
  }
  return count
}

module.exports = {
  getMatrixElementsSum
};
