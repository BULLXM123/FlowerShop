var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');
// var swig = require('swig')
var connection = mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'admin',
   database:'flowershop'
 });
 var userSql={
    insert:'INSERT INTO user (email,password) VALUES(?,?)',
    query:'SELECT * FROM user'
}

connection.connect();
app.use('/public', express.static(__dirname+'/public'));
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser());
app.use(bodyParser.json())
// app.set('views','./views')
// app.engine('html',swig.renderFile)
// app.set('view engine','html')
app.get('/',function(req,res){
    res.redirect('/index.html')
})
app.get('/index.html',function(req,res){
    res.sendFile(__dirname+"/public/flower.html")
    // var name = req.body.email;
    // res.render('login',{
    //     username:name
    // })

})
app.get('/flowername',function(req,res){
   
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
app.get('/user',function(req,res){
   
    connection.query(userSql.query,function(err,results,fields){
        if(err) throw err;
        results = JSON.stringify(results);
        data = eval("("+results+")");
        // data = parse(results);
    //    console.log(data);
       res.setHeader('Content-Type', 'text/plain;charset=utf-8');
       res.send(data)
    })
})

app.post('/adduser',function(req,res){
    // console.log(req);
    var email = req.body.email; 
    var password = req.body.password;
    // var query = 'INSERT INTO user VALUES ('+email+','+password+')';
    connection.query(userSql.insert,[email,password],function(err,results,fields){
        if(err){
          
            throw err;
        } 
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        res.redirect('/login.html')
        // res.format({
        //     'text/html':function(){
        //         res.send('<script><alert>succeed!</alert></script>')
        //     }
        // })
    })
})

// app.post('/login',function(req,res){
    

// })
var server = app.listen(3000,function(){
    console.log('http://localhost:3000');
})