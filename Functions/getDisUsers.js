const Users = require("../Database/Users.json")["users"];

const getDisUsers = () => {
  return Users.filter((user) => {
    if (user["districtCode"]) return user;
  });
};

module.exports = getDisUsers;
