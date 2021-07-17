const Users = require("../Database/Users.json")["users"];

const getPinUsers = () => {
  return Users.filter((user) => {
    if (user["pinCode"]) return user;
  });
};

module.exports = getPinUsers;
