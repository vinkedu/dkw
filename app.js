const express=require("express");
const session = require("express-session");
const bodyParser = require('body-parser');
var app=express();
var productlist=require("./router/productlist");
var videolist=require("./router/videolist");
var projectslist=require("./router/projectslist");
var newslist=require("./router/newslist");
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//将服务器的session，放在req.session中   
app.use(session({
    secret:'随机字符串',
    cookie:{maxAge:60*1000*30},//过期时间ms
    resave:false, 
    saveUninitialized:true
  }));  
//加载跨域模块
var cors=require('cors');
//配置跨域模块；允许那个地址跨域访问
app.use(cors(
    {
        origin:['http://127.0.0.1:8080',
        'http://localhost:8080'],
        credentials:true
}));
var server=app.listen(3000);
app.use(express.static(__dirname+"/public"));
app.use("/productlist",productlist);
app.use("/videolist",videolist);
app.use("/projectslist",projectslist);
app.use("/newslist",newslist);