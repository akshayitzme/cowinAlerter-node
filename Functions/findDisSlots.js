const { default: axios } = require("axios");

const cowinDisEndpoint ="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict";

const findDisSlots = (id, date, callback) => {
  axios
    .get(cowinDisEndpoint, {
      params: {
        district_id: id,
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

module.exports = findDisSlots;
