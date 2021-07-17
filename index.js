require('dotenv').config()
const check= require('./Functions/check')

const express = require('express')
const cron= require('node-cron');
const path = require('path');
const app = express()

app.set('port', (process.env.PORT || 5000))

app.get('/', function(request, response) {
  response.send(`<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Cowin Alerter V3</title></head><body> <center> <h1> Cowin Alerter V3 </h1> <p> Author: @akshayitzme </p> </center></body></html>`)
})

app.listen(app.get('port'), function() {
  console.log("app running at localhost:" + app.get('port'))
})

cron.schedule('*/15 * * * * *', () => {
  check()
});