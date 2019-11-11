const express = require('express');

const app = express();

app.use('/api/posts', (req,res,next)=>{
 res.json = [

 ];
});

module.exports = app;
