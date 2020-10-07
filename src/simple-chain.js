const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (String(value) !== '') {
      this.chain.push(value);
    } else {
        this.chain.push('');
    };

    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position >= 0 && position < this.chain.length) {
      this.chain.splice(position - 1, 1);
    } else {
        this.chain = [];
        throw new Error();
    };

    return this;
  },
  reverseChain() {
    this.chain.reverse();
    
    return this;
  },
  finishChain() {
    let result = '';

    this.chain.forEach((item, index) => {
      if (index === (this.chain.length - 1)) {
        result += `( ${item} )`
      } else {
        result += `( ${item} )~~`
      };
    });

    this.chain = [];

    return result;
  }
};

module.exports = chainMaker;
