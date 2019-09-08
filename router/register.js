const express = require('express');
const route = express.Router();
var mysql = require('mysql');
var userSql={
    insert:'INSERT INTO user (email,password) VALUES(?,?)',
    query:'SELECT * FROM user'
}

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'flowershop'
  });
 connection.connect();
//注册
route.post('/adduser',function(req,res,next){
    // console.log(req);
    var email = req.body.email; 
    var password = req.body.password;
    // var query = 'INSERT INTO user VALUES ('+email+','+password+')';
    connection.query(userSql.insert,[email,password],function(err,results,fields){
        if(err){
          
            throw err;
        } 
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        res.redirect('/login')
        // res.format({
        //     'text/html':function(){
        //         res.send('<script><alert>succeed!</alert></script>')
        //     }
        // })
    })
})
module.exports=route;