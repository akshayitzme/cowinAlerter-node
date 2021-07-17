const { default: axios } = require("axios");

const cowinPinEndpoint = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin";

const findPinSlots = async(pin, date, callback) => {
  await axios
    .get(cowinPinEndpoint, {
      params: {
        pincode: pin,
        date: date,
      },
    })
    .then(res =>{
        callback(res['data'])
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

module.exports = findPinSlots;
