const express =require('express');
const route = express.Router();
const path = require('path');
const app = express();
// console.log(email);
route.get('/login',function(req,res){
    res.sendFile(path.resolve(__dirname,'..')+'/public/login.html')
    // res.redirect('../public/login.html')
})

route.get('/flower/',function(req,res,next){
    // console.log(email)
    res.render('logined.ejs',{
        username:app.locals.username
    })
})
module.exports= route;