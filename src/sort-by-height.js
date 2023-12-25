const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let min = [];
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) min.push(i);
  }

  res = arr.filter(item => item > 0).sort((a,b) => a - b);
  
  for (let i = 0; i < min.length; i++) {
    res.splice(min[i], 0, -1);
  }
  return res;
}

module.exports = {
  sortByHeight
};
