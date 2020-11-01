const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Parameters are undefined!');
    }

    let resultString = '';

    resultString = resultString.toUpperCase();

    return this.type ? resultString : resultString.split('').reverse().join('');
  } 

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Parameters are undefined!');
    }

    let resultString = '';

    resultString = resultString.toUpperCase();

    return this.type ? resultString : resultString.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
