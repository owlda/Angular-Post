//constants required for the work application
const express = require('express');
const app = express();

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methodes", "GET, POST, DELETE, OPTIONS, PATCH");
  next();
});
app.use('/',(req, res, next)=>{
  res.send('Express')

});
module.exports = app;
