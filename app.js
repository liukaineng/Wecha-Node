const express = require('express'), //express 框架 
      wechat  = require('./wechat/wechat'), 
       config = require('./config');//引入配置文件
       
var app = express();//实例express框架

var wechatApp = new wechat(config); //实例wechat 模块

//用于处理所有进入 80 端口 get 的连接请求
app.get('/wecha',function(req,res){
    wechatApp.auth(req,res);
});

//用于处理所有进入 80 端口 post 的连接请求
app.post('/wecha',function(req,res){
    wechatApp.handleMsg(req,res);
});

//用于请求获取 access_token
app.get('/getAccessToken',function(req,res){
    console.info("用于请求获取 access_token....");
    wechatApp.getAccessToken().then(function(data){
        res.send(data);
    });    
});

//监听80端口
app.listen(80)
{
    console.log("start server port : 80")
};