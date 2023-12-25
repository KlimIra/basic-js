const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';

  if (str.length) {
    let lastValue = str[0];
    let count = 1;
    for (let i=1; i < str.length; i++) {
      const value = str[i];
      if (value !== lastValue) {
        result += (count > 1 ? count : '') + lastValue;
        lastValue = value;
        count = 1;
      }
      else {
        count++;
      }
    }
    result += (count > 1 ? count : '') + lastValue;
  }
  return result;
}

module.exports = {
  encodeLine
};
