//JS作用域与执行上下文
// JS 作用域及其特点


//全局作用
var a = 10,
    b = 20;
function fn() {
    //fn局部作用域
    var a = 100,
        c = 200;
    //console.log(a,b,c,d);  // 访问不到d
    function bar() {
        //bar局部作用域
        var a = 500,
            d = 600;
        console.log(a,b,c,d);  // 500 20 200 600
    }
    bar();
}
fn();
//console.log(a,b,c,d);  // 访问不到c,d



// JS采用静态词法作用域 与调用形式无关

var name = "Jack";
function echo() {
    console.log(name);
}
echo();    // Jack

//词法作用域 与调用形式无关 实例一
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();      // Jack

//词法作用域 与调用形式无关 实例二
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();       // Jack

//通过new Function实例化的函数对象，不一定遵从静态词法作用域
var scope = "g";
function foo(){
	var scope = "l";
	return new Function("console.log(scope);")
}
foo()();     // g

//
var scope = 'global';
function checkscope(){
    var scape = 'local';
    return function(){
        return scope;
    };
}
console.log(checkscope()());   // local


//
var scope = 'global';
function checkscope(){
    var scape = 'local';
    return new Function("return scope;");
}
console.log(checkscope()());    // global

//------------------------
// ES5中没有块作用域，会造成变量污染、变量共享等问题，用立即执行表达式解决
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
//一长串代码后，假如看不见上述代码了
var a=2,b=3;
if(a<b){
    var userId = 234;
}        //点击屏幕后 出现结果 234


//添加立即执行表达式
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
//.............
(function(){
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());       //结果是 123




