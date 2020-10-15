const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const resultArray = [];

  if (Array.isArray(arr)) {
    const cloneArray = arr.slice();
    const discardValue = Symbol('discard');

    for (let i = 0; i < cloneArray.length; i += 1) {
      if (cloneArray[i] === '--discard-next') {
        if (i + 1 < cloneArray.length) {
          cloneArray[i + 1] = discardValue;
          i += 1;
        };
        continue;
      } else if (cloneArray[i] === '--discard-prev') {
        if (i - 1 >= 0 && (cloneArray[i - 1] !== discardValue)) {
          resultArray.pop();
        };
        continue;
      } else if (cloneArray[i] === '--double-next') {
        if (i + 1 < cloneArray.length) {
          resultArray.push(cloneArray[i + 1]);
        };
        continue;
      } else if (cloneArray[i] === '--double-prev') {
        if (i - 1 >= 0 && (cloneArray[i - 1] !== discardValue)) {
          resultArray.push(cloneArray[i - 1]);
        };
        continue;
      };

      resultArray.push(cloneArray[i]);
    };
  } else {
    throw new Error();
  };

  return resultArray;
};