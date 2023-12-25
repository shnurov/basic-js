const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let arr2 = arr;
  let command = ['--discard-prev', '--discard-next', '--double-prev', '--double-next'];
  let res = [];

  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
if (arr.length === 0) return res;


if ((arr[0] == '--discard-prev') || (arr[0] == '--double-prev')) {
  arr2 = arr2.slice(1);
}
if ((arr2[arr2.length - 1] == '--discard-next') || (arr2[arr2.length - 1] == '--double-next')) {
  arr2 = arr2.slice(0,(arr2.length - 1));
}

for (let i = 0; i < arr.length; i++) {
  switch(arr[i]) {

    case command[0]: 
    if (i > 0 && arr2[i-2] !== command[1]) {
    res.pop();
    }
    break;

    case command[1]: 
    i++;
    break;

    case command[2]:
    if (i - 1 >= 0 && arr[i - 2] !== command[1]) {
      res.push(arr[i-1]);
    }
    break;

    case command[3]:
    if (i+1 < arr.length) {
      res.push(arr[i + 1]);
    }
    break;
    default:
      res.push(arr[i]);

  }
}
  return res;
}

module.exports = {
  transform
};
