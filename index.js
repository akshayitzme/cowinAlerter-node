require('dotenv').config()
const check= require('./Functions/check')

const express = require('express')
const cron= require('node-cron');
const path = require('path');
const app = express()

app.set('port', (process.env.PORT || 5000))

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'HTML/index.html'));

})

app.listen(app.get('port'), function() {
  console.log("app running at localhost:" + app.get('port'))
})

cron.schedule('*/15 * * * * *', () => {
  check()
});