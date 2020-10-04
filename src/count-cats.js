const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let countCats = 0;

    matrix.forEach(levelOneItem => {
        levelOneItem.forEach(levelTwoItem => {
            if (levelTwoItem === '^^') {
                countCats += 1;
            };
        })
    });

    return countCats;
};
