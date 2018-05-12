// 1.给定这样一个连字符串，var s1 = "dgfhfgh254bhku289fgdhdy675gfh";
// 写一个function提取上述字符串中的字符最终输出：[254,289,675]
var s1 = "dgfhfgh254bhku289fgdhdy675gfh";
function select(str){
    var reg = /\d{3}/g;
    return str.match(reg);
}
select(s1);

// 2.给定这样一个连字符串，var s2 = "get-element-by-id";
// 写一个function转换为驼峰命名法形式的字符串输出：getElementById
var s2 = "get-element-by-id";
function change(str){
    var a = /-\w/g;
    return str.replace(a,function(x){
        return x.slice(1).toUpperCase();
    });
}
change(s2);

// 3.写出正则表达式，从一个字符串中提取链接地址。
// 如var s3 = "测试<a href = http://www.baidu.com/>笔试</a> <a href = http://www.edu2act.cn/>笔试</a>正则";
// 写一个function从s3中提取出网址，输出数组：["www.baidu.com","www.edu2act.cn"]
var s3 = "测试<a href = http://www.baidu.com/>笔试</a> <a href = http://www.edu2act.cn/>笔试</a>正则";
function tiqu(str){
    var a = /www.\w*.\w*\b/g;
    return str.match(a);
}
tiqu(s3);



