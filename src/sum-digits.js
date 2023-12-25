const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
let number = n.toString();
let total = 0;
number.split('');

if (number.length > 1) {
  for (let i = 0; i < number.length; i++) {
    total += Number(number[i]);
  }
}
if (number.length === 1) {
  total = Number(number);
}

  return Number(total);

}

module.exports = {
  getSumOfDigits
};
