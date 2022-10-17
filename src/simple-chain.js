const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  clear() {
    this.chain = [];
    return this;
  },
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!this.chain[position - 1]) {
      this.clear();
      throw new Error("You can't remove incorrect link!");
    }
      
    this.chain = this.chain.filter((_, index) => position - 1 !== index);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let fin = this.chain.join('~~');
    this.clear();
    return fin;
  },
};

module.exports = {
  chainMaker
};
