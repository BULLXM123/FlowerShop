const express =require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser());
app.use(bodyParser.json())
app.post('/check',function(req,res,next){
const email = req.body.email;
//    console.log('qwe')
app.use(function(req,res,next){
    res.locals={username:email}
})
})

module.exports = app;