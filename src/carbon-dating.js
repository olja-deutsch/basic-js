const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (arguments.length && (typeof sampleActivity === 'string') && (parseFloat(sampleActivity) > 0) && (parseFloat(sampleActivity) < MODERN_ACTIVITY)) {
    k = 0.693/HALF_LIFE_PERIOD;
    t = Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity)) / k; 

    return Math.ceil(parseFloat(t));
  } else {
      return false;
  };
};
