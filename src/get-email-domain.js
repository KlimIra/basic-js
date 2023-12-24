const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const str = email.split('@').at(-1);
  if (str?.length && str[0] === '.') {
    return str.slice(0);
  }
  return str;
}

module.exports = {
  getEmailDomain
};
