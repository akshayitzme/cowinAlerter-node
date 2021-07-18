const getPinUsers = require("./getPinUsers");
const send = require("./send");
const Users = getPinUsers();

const handlePinSlots = (data) => {
  data["centers"].map((center) => {
    center["sessions"].map((session) => {
      Users.map(async(user) => {
        if (parseInt(session["available_capacity"]) > 0) {
          // First Dose
          if (
            parseInt(session["available_capacity_dose1"]) > 0 &&
            user["dose"] == "first"
          ) {
            // All Age
            if (session["allow_all_age"] == true) {
              let fee =
                center["fee_type"] == "Paid" ? "💵 Fee: Paid" : "💵 Fee: Free";
              let msg = `Slot Available for <b>${user["name"]}</b>\n\n🏠 Venue: ${center["name"]}\n\n🗓️ Date: <b>${session["date"]}</b>\n\n🔢 Available Doses: ${session["available_capacity_dose1"]}\n\n${fee}\n\n💉 Vaccine: ${session["vaccine"]}\n\n💊 Dose: First\n\n⏰ Slots: ${session["slots"]}\n\n📍 Address: ${center["address"]}`;
              await send(msg, user["chatId"]);
            }

            // 18+
            else if (
              parseInt(session["min_age_limit"]) === 18 &&
              user["ageGroup"] == 18 &&
              center["pincode"] == user["pinCode"]
            ) {
              let fee =
                center["fee_type"] == "Paid" ? "💵 Fee: Paid" : "💵 Fee: Free";
              let msg = `Slot Available for <b>${user["name"]}</b>\n\n🏠 Venue: ${center["name"]}\n\n🗓️ Date: <b>${session["date"]}</b>\n\n🔢 Available Doses: ${session["available_capacity_dose1"]}\n\n${fee}\n\n💉 Vaccine: ${session["vaccine"]}\n\n💊 Dose: First\n\n⏰ Slots: ${session["slots"]}\n\n📍 Address: ${center["address"]}`;
              await send(msg, user["chatId"]);
            }
            // 40+
            else if (
              parseInt(session["max_age_limit"]) === 44 &&
              user["ageGroup"] == 40 &&
              center["pincode"] == user["pinCode"]
            ) {
              let fee =
                center["fee_type"] == "Paid" ? "💵 Fee: Paid" : "💵 Fee: Free";
              let msg = `Slot Available for <b>${user["name"]}</b>\n\n🏠 Venue: ${center["name"]}\n\n🗓️ Date: <b>${session["date"]}</b>\n\n🔢 Available Doses: ${session["available_capacity_dose1"]}\n\n${fee}\n\n💉 Vaccine: ${session["vaccine"]}\n\n💊 Dose: First\n\n⏰ Slots: ${session["slots"]}\n\n📍 Address: ${center["address"]}`;
              await send(msg, user["chatId"]);
            }
            // 45+
            else if (
              parseInt(session["min_age_limit"]) === 45 &&
              user["ageGroup"] == 45 &&
              center["pincode"] == user["pinCode"]
            ) {
              let fee =
                center["fee_type"] == "Paid" ? "💵 Fee: Paid" : "💵 Fee: Free";
              let msg = `Slot Available for <b>${user["name"]}</b>\n\n🏠 Venue: ${center["name"]}\n\n🗓️ Date: <b>${session["date"]}</b>\n\n🔢 Available Doses: ${session["available_capacity_dose1"]}\n\n${fee}\n\n💉 Vaccine: ${session["vaccine"]}\n\n💊 Dose: First\n\n⏰ Slots: ${session["slots"]}\n\n📍 Address: ${center["address"]}`;
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
                center["fee_type"] == "Paid" ? "💵 Fee: Paid" : "💵 Fee: Free";
              let msg = `Slot Available for <b>${user["name"]}</b>\n\n🏠 Venue: ${center["name"]}\n\n🗓️ Date: <b>${session["date"]}</b>\n\n🔢 Available Doses: ${session["available_capacity_dose2"]}\n\n${fee}\n\n💉 Vaccine: ${session["vaccine"]}\n\n💊 Dose: Second\n\n⏰ Slots: ${session["slots"]}\n\n📍 Address: ${center["address"]}`;
              await send(msg, user["chatId"]);
            }

            // 18+
            else if (
              parseInt(session["min_age_limit"]) === 18 &&
              user["ageGroup"] == 18 &&
              center["pincode"] == user["pinCode"]
            ) {
              let fee =
                center["fee_type"] == "Paid" ? "💵 Fee: Paid" : "💵 Fee: Free";
              let msg = `Slot Available for <b>${user["name"]}</b>\n\n🏠 Venue: ${center["name"]}\n\n🗓️ Date: <b>${session["date"]}</b>\n\n🔢 Available Doses: ${session["available_capacity_dose2"]}\n\n${fee}\n\n💉 Vaccine: ${session["vaccine"]}\n\n💊 Dose: Second\n\n⏰ Slots: ${session["slots"]}\n\n📍 Address: ${center["address"]}`;
              await send(msg, user["chatId"]);
            }
            // 40+
            else if (
              parseInt(session["max_age_limit"]) === 44 &&
              user["ageGroup"] == 40 &&
              center["pincode"] == user["pinCode"]
            ) {
              let fee =
                center["fee_type"] == "Paid" ? "💵 Fee: Paid" : "💵 Fee: Free";
              let msg = `Slot Available for <b>${user["name"]}</b>\n\n🏠 Venue: ${center["name"]}\n\n🗓️ Date: <b>${session["date"]}</b>\n\n🔢 Available Doses: ${session["available_capacity_dose2"]}\n\n${fee}\n\n💉 Vaccine: ${session["vaccine"]}\n\n💊 Dose: Second\n\n⏰ Slots: ${session["slots"]}\n\n📍 Address: ${center["address"]}`;
              await send(msg, user["chatId"]);
            }
            // 45+
            else if (
              parseInt(session["min_age_limit"]) === 45 &&
              user["ageGroup"] == 45 &&
              center["pincode"] == user["pinCode"]
            ) {
              let fee =
                center["fee_type"] == "Paid" ? "💵 Fee: Paid" : "💵 Fee: Free";
              let msg = `Slot Available for <b>${user["name"]}</b>\n\n🏠 Venue: ${center["name"]}\n\n🗓️ Date: <b>${session["date"]}</b>\n\n🔢 Available Doses: ${session["available_capacity_dose2"]}\n\n${fee}\n\n💉 Vaccine: ${session["vaccine"]}\n\n💊 Dose: Second\n\n⏰ Slots: ${session["slots"]}\n\n📍 Address: ${center["address"]}`;
              await send(msg, user["chatId"]);
            }
          }
        }
      });
    });
  });
};

module.exports = handlePinSlots;
