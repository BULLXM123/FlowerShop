const express =require('express');
const route = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin',
    database:'flowershop'
  });
 connection.connect();
//获取搜索框鲜花
route.get('/flowername',function(req,res,next){
   
    connection.query('SELECT * FROM flowername',function(err,results,fields){
        if(err) throw err;
        results = JSON.stringify(results);
        data = eval("("+results+")");
        // data = parse(results);
    //    console.log(data);
       res.setHeader('Content-Type', 'text/plain;charset=utf-8');
       res.send(data)
    })
})
module.exports=route;