import isSeperatedByHyphens from "./isSeperatedByHyphens";
import capitalizeFirstLetterOfWord from "./capitalizeFirstLetterOfWord";

/**
 *
 * @param {string} str
 * @returns {string}
 */

const changeToPascalCase = (str) => {
  if (isSeperatedByHyphens(str)) {
    return str
      .split("-")
      .reduce(
        (prev, curr) =>
          `${capitalizeFirstLetterOfWord(prev)} ${capitalizeFirstLetterOfWord(
            curr
          )}`
      );
  } else {
    return capitalizeFirstLetterOfWord(str);
  }
};

export default changeToPascalCase;
