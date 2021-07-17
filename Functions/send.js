const axios = require("axios");

const send = async (msg, chatId) => {
  await sleep(200)
  try {
     axios
        .get(
          `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
          {
            params: {
              chat_id: chatId,
              text: msg,
              parse_mode: "html",
            },
          }
        )
        .catch(function (error) {
          // handle error
          console.log(error);
        });
  } catch (err) {
    console.log(err);
  }
};

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}   

module.exports = send;
