const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
  let teamName = '';
  let members = arguments[0];
  let namesArr = [];
  let namesCounter = 0;

  if (members) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == 'string') {
        let member = members[i].trim();
        namesArr.push(member);
        namesCounter++;
      }
    }
  
    if (namesCounter != 0) {
      namesArr.sort();
  
      for (let i = 0; i < namesArr.length; i++) {
        let name = namesArr[i].toUpperCase();
        teamName += name.charAt(0);
      }
  
      return teamName;
      
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
