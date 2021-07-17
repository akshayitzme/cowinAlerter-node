const makeDate = require("./makeDate");
const send = require("./send");
const DB = require("../Database/Users.json");
const getDisIds = require("./getDisIds");
const getPinCodes = require("./getPinCodes");
const findDisSlots = require("./findDisSlots");
const findPinSlots = require("./findPinSlots");
const handlePinSlots = require("./handlePinSlots");
const handleDisSlots = require("./handleDisSlots");
const Users = DB["users"];

const check = async () => {
  let disIds = getDisIds(Users);
  let pins = getPinCodes(Users);
  let date = makeDate();
  
  try {
    pins.forEach((pin) => {
      findPinSlots(pin, date, handlePinSlots);
    });
  } catch (err) {
    console.log(err);
  }

  try {
    disIds.forEach((id) => {
      findDisSlots(id, date, handleDisSlots);
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = check;
