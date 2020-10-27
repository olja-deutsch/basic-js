const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  const repeatTimes = options.repeatTimes !== undefined ? Number(options.repeatTimes) : 0;
  const separator = options.separator !== undefined ? String(options.separator) : '+';
  const addition = options.addition !== undefined ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes !== undefined ? Number(options.additionRepeatTimes) : 0;
  const additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : '|';
  let resultString = '';
  let additionString = additionRepeatTimes === 0 ? addition : '';
  let stringToRepeat = '';

  for (let i = 0; i < additionRepeatTimes; i++) {
    if (i === (additionRepeatTimes - 1)) {
      additionString += addition;
      break;
    }

    additionString += addition + additionSeparator;
  }

  stringToRepeat = str + additionString;

  for (let i = 0; i < repeatTimes; i++) {
    if (i === (repeatTimes - 1)) {
      resultString += stringToRepeat;
      break;
    }

    resultString += stringToRepeat + separator;
  }
  
  resultString = repeatTimes === 0 ? stringToRepeat : resultString;

  return resultString;
};