const { NotImplementedError } = require('../extensions/index.js');
const {assert} = require("chai");

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
  const getArrNumber = (num) => {
    return num.toString().split('').map((dig) => Number(dig));
  }
  const reducer = (arr) => {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  let arrNumbers = getArrNumber(n);
  let number = reducer(arrNumbers);
  while (number.toString().length > 1) {
    number = reducer(getArrNumber(number));
  }
  return number;
}

module.exports = {
  getSumOfDigits
};
