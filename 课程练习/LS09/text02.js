//预解析与作用域
/*
- 变量的作用域是指变量在何处可被访问到
  -- JS采用静态词法作用域！！！ 代码完成后作用域链就已形成，
     与代码的执行顺序无关
- 全局变量与局部变量
  定义 作用域
  函数内访问同名变量时，局部变量会覆盖全局变量
*/

// 例
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();  // 输出谁

// ------------------------------->

var name;
name = "Jack";
function echo() {
    console.log(name);   //静态词法作用域，echo只能访问Jack，无法访问Bill 与调用位置无关
}
function foo() {
    var name;
    name = "Bill";
    echo();
}
foo();  // Jack


//全局变量与局部变量
var x = "outside f1";
var f1 = function () {
    //var x = "inside f1";
    //如果没有这行，则两次输出都为outside
    console.log(x);
};
f1();
console.log(x);


//若函数内未加var 则相当于创建了全局变量
var f2 = function () {
    var y = "局部";
    //y = "全局";
    console.log(y);
};
f2();
console.log(y);
//若函数内有var此行报错，若函数内没有var则此行输出全局变量y值


//ES5中无块作用域
if(true){
    var z = 23;
}
console.log(z);//正常输出

if(true){
    // 立即执行表达式
    (function () { //IIFE start
        var z = 23;
    }());           //IIFE end
}
console.log(z);//报错



//、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、

if(true){
    var i = 0;
}
function foo(){
    console.log("j:",j);//undefined
    var j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错 局部变量

//上边代码等价于------------>
var i;
if(true){
    i = 0;
}

function foo(){
    var j;
    console.log("j:",j);//undefined
    j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错