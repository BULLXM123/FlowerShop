var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var swig = require('swig')
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
//swig渲染
app.engine('html',swig.renderFile);
//摸板引擎存放目录的关键字，固定字段
app.set('views',__dirname+'/public/');
//注册摸板引擎，固定字段
app.set('view engine','html');
//关闭swig缓存,缓存的目的也是提高node服务器的响应速度
swig.setDefaults({cache:false});

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
//获取搜索框鲜花
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
//登录
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
//注册
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

app.post('/showUser',function(req,res){
    var email = req.body.email;
    console.log(email);
    res.render('flower',{
        username:email
    },function(err,html){
        res.send(html)
    })

    console.log("render succeed");
  

    

})
var server = app.listen(3000,function(){
    console.log('http://localhost:3000');
})