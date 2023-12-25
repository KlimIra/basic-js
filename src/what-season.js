const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let season = date.getMonth();
  if (date.valueOf().toString() === 'winter' || date.toString() === 'summer' || date.toString() === 'autumn' || date.toString() === 'spring') {
    return date.toString();
  }
  if (season === 0 || season === 1 || season === 11) {
    return 'winter';
  }
  if (season > 4 && season < 8) {
    return 'summer';
  }
  if (season > 7 && season < 11) {
    return 'autumn';
  }
  if (season > 1 && season < 5) {
    return 'spring';
  }
  // if (!(date instanceof Date)) {
  //   return "Invalid date!";
  // }
  // return !isNaN(date.getTime());
  // return !isNaN(Date.parse(date));
}

module.exports = {
  getSeason
};
