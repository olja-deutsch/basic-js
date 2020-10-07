const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeamName = [];

  if (Array.isArray(members)) {
    members.forEach(member => {
      if (typeof member === 'string') {
          member = member.trim();
          dreamTeamName.push(member[0].toUpperCase());
      };
    });
  } else {
    return false;
  };

  dreamTeamName = dreamTeamName.sort().join('');

  return dreamTeamName.length > 0 ? dreamTeamName : false;
};
