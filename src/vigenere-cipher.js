const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
    this.alphabetLength = 26;
    this.asciiA = 65;
    this.asciiZ = 90;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    let arrMessage = message.toUpperCase().split('');
    while (key.length < message.length) {
      key += key;
    }

    let arrFromKey = key.toUpperCase().split('');
    let shiftNumKey = arrFromKey.map((item) => {
      return item.charCodeAt() - this.asciiA;
    });
    let counter = 0;

    let encryptMessage = arrMessage.map((item, index) => {
      if (
        item === ' ' ||
        item.charCodeAt() > this.asciiZ ||
        item.charCodeAt() < this.asciiA
      ) {
        counter++;
        return item;
      } else {
        if (
          item.charCodeAt() + shiftNumKey[index - counter] >
          this.asciiZ
        ) {
          return String.fromCharCode(
            item.charCodeAt() +
              shiftNumKey[index - counter] -
              this.alphabetLength
          );
        } else {
          return String.fromCharCode(
            item.charCodeAt() + shiftNumKey[index - counter]
          );
        }
      }
    });

    if (this.mode === false) {
      return encryptMessage.reverse().join('');
    }
    return encryptMessage.join('');
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    let arrMessage = message.split('');
    while (key.length < message.length) {
      key += key;
    }

    let arrFromKey = key.toUpperCase().split('');
    let counter = 0;

    let decryptMessage = arrMessage.map((item, index) => {
      if (
        item === ' ' ||
        item.charCodeAt() > this.asciiZ ||
        item.charCodeAt() < this.asciiA
      ) {
        counter++;
        return item;
      } else {
        if (
          item.charCodeAt() -
            this.asciiA +
            (this.asciiZ + 1 - arrFromKey[index - counter].charCodeAt()) >=
          this.alphabetLength
        ) {
          return String.fromCodePoint(
            item.charCodeAt() -
              this.asciiA +
              (this.asciiZ +
                1 -
                arrFromKey[index - counter].charCodeAt()) +
              this.asciiA -
              this.alphabetLength
          );
        } else {
          return String.fromCodePoint(
            item.charCodeAt() -
              this.asciiA +
              (this.asciiZ +
                1 -
                arrFromKey[index - counter].charCodeAt()) +
              this.asciiA
          );
        }
      }
    });
    
    if (this.mode === false) {
      return decryptMessage.reverse().join('');
    }
    return decryptMessage.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
