const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsCount = Math.pow(2, disksNumber) - 1;
  const workTime = Math.floor(turnsCount * 3600 / turnsSpeed);
  
  let result = {
    turns: turnsCount,
    seconds: workTime
  };

  return result;
};
