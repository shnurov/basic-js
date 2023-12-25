const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = (n + '');
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let cur = str.split('');
    cur.splice(i, 1);
    arr.push(cur.join(''));
  }
return parseInt(arr.sort()[arr.length - 1]);
}

module.exports = {
  deleteDigit
};
