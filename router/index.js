const express = require('express');
const route = express.Router();

route.get('/',function(req,res,next){
    res.render('index.ejs')
})

module.exports = route;