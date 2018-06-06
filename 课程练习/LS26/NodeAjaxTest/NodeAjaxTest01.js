var http = require("http");
var url = require("url");

http.createServer(function(req,res){
    // console.log(Object.keys(req),"___",Object.keys(res));
    // console.log("req.url:",req.url);
    // var getDateObj = url.parse(req,url,true).query; // parse函数中的第二个参数为true的话返回一个对象
    var getDataStr = url.parse(req.url).query;

    res.writeHead(200,{
        "Content-Type":"text/plain",
        //res.writeHead(200,{"Content-Type":"application/json"}),
        "Access-Control-Allow-Origi":"*",//在后端只持股啊与访问的设置，响应头中的设置
        "Access-Control-Allow-Methods":"GET,POST"
    });

    setTimeout(function(){
        res.end("你好，我已经收到你发的信息："+getDataStr);
    },20000*Math.random());
    // res.end("你好，我已经收到你发的信息："+getDataStr);
}).listen(8080,"127.0.0.1");

console.log("Satrt Server");



