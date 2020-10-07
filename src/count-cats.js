const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let countCats = [];

    combinedArray = matrix.flat();
    
    countCats = combinedArray.filter(item => item === '^^'); 

    return countCats.length;
};
