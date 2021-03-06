const send = require("./send");
const getDisUsers = require("./getDisUsers");
const Users = getDisUsers();

const handleDisSlots = (data) => {
  data["centers"].map((center) => {
    center["sessions"].map((session) => {
      Users.map(async (user) => {
        if (parseInt(session["available_capacity"]) > 0) {
          // First Dose
          if (
            parseInt(session["available_capacity_dose1"]) > 0 &&
            user["dose"] == "first"
          ) {
            // All Age
            if (session["allow_all_age"] == true) {
              let fee =
                center["fee_type"] == "Paid" ? "šµ Fee: Paid" : "šµ Fee: Free";
              let msg = `Slot Available for <b>${user["name"]}</b>\n\nš  Venue: ${center["name"]}\n\nšļø Date: <b>${session["date"]}</b>\n\nš¢ Available Doses: ${session["available_capacity_dose1"]}\n\n${fee}\n\nš Vaccine: ${session["vaccine"]}\n\nš Dose: First\n\nā° Slots: ${session["slots"]}\n\nš Address: ${center["address"]}`;
              await send(msg, user["chatId"]);
            }

            // 18+
            else if (
              parseInt(session["min_age_limit"]) === 18 &&
              user["ageGroup"] == 18 &&
              center["district_name"] == user["districtName"]
            ) {
              let fee =
                center["fee_type"] == "Paid" ? "šµ Fee: Paid" : "šµ Fee: Free";
              let msg = `Slot Available for <b>${user["name"]}</b>\n\nš  Venue: ${center["name"]}\n\nšļø Date: <b>${session["date"]}</b>\n\nš¢ Available Doses: ${session["available_capacity_dose1"]}\n\n${fee}\n\nš Vaccine: ${session["vaccine"]}\n\nš Dose: First\n\nā° Slots: ${session["slots"]}\n\nš Address: ${center["address"]}`;

              await send(msg, user["chatId"]);
            }
            // 40+
            else if (
              parseInt(session["max_age_limit"]) === 44 &&
              user["ageGroup"] == 40 &&
              center["district_name"] == user["districtName"]
            ) {
              let fee =
                center["fee_type"] == "Paid" ? "šµ Fee: Paid" : "šµ Fee: Free";
              let msg = `Slot Available for <b>${user["name"]}</b>\n\nš  Venue: ${center["name"]}\n\nšļø Date: <b>${session["date"]}</b>\n\nš¢ Available Doses: ${session["available_capacity_dose1"]}\n\n${fee}\n\nš Vaccine: ${session["vaccine"]}\n\nš Dose: First\n\nā° Slots: ${session["slots"]}\n\nš Address: ${center["address"]}`;

              await send(msg, user["chatId"]);
            }
            // 45+
            else if (
              parseInt(session["min_age_limit"]) === 45 &&
              user["ageGroup"] == 45 &&
              center["district_name"] == user["districtName"]
            ) {
              let fee =
                center["fee_type"] == "Paid" ? "šµ Fee: Paid" : "šµ Fee: Free";
              let msg = `Slot Available for <b>${user["name"]}</b>\n\nš  Venue: ${center["name"]}\n\nšļø Date: <b>${session["date"]}</b>\n\nš¢ Available Doses: ${session["available_capacity_dose1"]}\n\n${fee}\n\nš Vaccine: ${session["vaccine"]}\n\nš Dose: First\n\nā° Slots: ${session["slots"]}\n\nš Address: ${center["address"]}`;

              await send(msg, user["chatId"]);
            }
          }
          //   End First Dose

          // Second Dose
          if (
            parseInt(session["available_capacity_dose2"]) > 0 &&
            user["dose"] == "second" &&
            session["vaccine"] == user["firstVaccine"]
          ) {
            // All Age
            if (session["allow_all_age"] == true) {
              let fee =
                center["fee_type"] == "Paid" ? "šµ Fee: Paid" : "šµ Fee: Free";
              let msg = `Slot Available for <b>${user["name"]}</b>\n\nš  Venue: ${center["name"]}\n\nšļø Date: <b>${session["date"]}</b>\n\nš¢ Available Doses: ${session["available_capacity_dose2"]}\n\n${fee}\n\nš Vaccine: ${session["vaccine"]}\n\nš Dose: Second\n\nā° Slots: ${session["slots"]}\n\nš Address: ${center["address"]}`;

              await send(msg, user["chatId"]);
            }

            // 18+
            else if (
              parseInt(session["min_age_limit"]) === 18 &&
              user["ageGroup"] == 18 &&
              center["district_name"] == user["districtName"]
            ) {
              let fee =
                center["fee_type"] == "Paid" ? "šµ Fee: Paid" : "šµ Fee: Free";
              let msg = `Slot Available for <b>${user["name"]}</b>\n\nš  Venue: ${center["name"]}\n\nšļø Date: <b>${session["date"]}</b>\n\nš¢ Available Doses: ${session["available_capacity_dose2"]}\n\n${fee}\n\nš Vaccine: ${session["vaccine"]}\n\nš Dose: Second\n\nā° Slots: ${session["slots"]}\n\nš Address: ${center["address"]}`;

              await send(msg, user["chatId"]);
            }
            // 40+
            else if (
              parseInt(session["max_age_limit"]) === 44 &&
              user["ageGroup"] == 40 &&
              center["district_name"] == user["districtName"]
            ) {
              let fee =
                center["fee_type"] == "Paid" ? "šµ Fee: Paid" : "šµ Fee: Free";
              let msg = `Slot Available for <b>${user["name"]}</b>\n\nš  Venue: ${center["name"]}\n\nšļø Date: <b>${session["date"]}</b>\n\nš¢ Available Doses: ${session["available_capacity_dose2"]}\n\n${fee}\n\nš Vaccine: ${session["vaccine"]}\n\nš Dose: Second\n\nā° Slots: ${session["slots"]}\n\nš Address: ${center["address"]}`;

              await send(msg, user["chatId"]);
            }
            // 45+
            else if (
              parseInt(session["min_age_limit"]) === 45 &&
              user["ageGroup"] == 45 &&
              center["district_name"] == user["districtName"]
            ) {
              let fee =
                center["fee_type"] == "Paid" ? "šµ Fee: Paid" : "šµ Fee: Free";
              let msg = `Slot Available for <b>${user["name"]}</b>\n\nš  Venue: ${center["name"]}\n\nšļø Date: <b>${session["date"]}</b>\n\nš¢ Available Doses: ${session["available_capacity_dose2"]}\n\n${fee}\n\nš Vaccine: ${session["vaccine"]}\n\nš Dose: Second\n\nā° Slots: ${session["slots"]}\n\nš Address: ${center["address"]}`;

              await send(msg, user["chatId"]);
            }
          }
        }
      });
    });
  });
};
module.exports = handleDisSlots;
