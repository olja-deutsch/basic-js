const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;

    arr.forEach(currentArray => {
      if (!Array.isArray(currentArray)) {
        return depth;
      } else {
        const currentDepth = this.calculateDepth(currentArray) + 1;

        if (currentDepth > depth) {
          depth = currentDepth;
        };
      };
    });

    return depth;
  }
};