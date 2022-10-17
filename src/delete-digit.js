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
  let string = String(n);
  let number = Number(string.slice(1));

  for (let i = 1; i < string.length; i++) {
    let newNumber = Number(string.replace(string[i], ''));
    if (newNumber > number) number = newNumber;
  }

  return number;
}

module.exports = {
  deleteDigit
};
