const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  for (let k = 0; k < domains.length; k++) {
    let res = '';
    let str = domains[k].split('.').reverse();
    for (let i = 0; i < str.length; i++) {
      res += '.' + str[i];
      Object.hasOwn(result, res.toString()) ? result[res]++ : result[res] = 1;
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
