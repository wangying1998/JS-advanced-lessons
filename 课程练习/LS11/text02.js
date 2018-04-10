// 解决JS缺陷 通过IIFE对作用域的改变（限制变量的生命周期）


// 变量污染  尤其是异步执行的情况下

var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};

//一长串代码后，假如看不见上述代码了
//(function () {
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
//}());
// 若没有立即执行，会导致userId被覆盖 最终输出234  可以用立即执行表达式解决

// 另变量污染 见text03_1.js    text03_2.js    text.html

