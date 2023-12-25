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
function createDreamTeam(members) {
  if (members == null || !Array.isArray(members)) return false;
  let res = [];
  members.forEach(element => {
    if (typeof element === "string") {
      res.push((element.trim())[0].toUpperCase());
    }

  });
  if(res.length > 0) return res.sort((a,b) => a.localeCompare(b)).join('');
  return false;
}

module.exports = {
  createDreamTeam
};
