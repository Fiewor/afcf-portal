/**
 *
 * @param {string} str
 * @returns {string}
 */

const capitalizeFirstLetterOfWord = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export default capitalizeFirstLetterOfWord;
