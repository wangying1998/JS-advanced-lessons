//JS中严格模式和非严格模式
/* 启用严格模式:
- 针对整个文件使用'use strict' 
- 针对函数使用'use strict'
*/
"use strict"//全局使用

function foo() {
    "use strict"//函数内部使用
}

/* 严格模式 */

//*********严格模式下全局变量需要显示声明
// 非严格模式
function  sloppyFunc() {
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);  //123


//下边的实例，若使用严格模式则报错
function  sloppyFunc() {
    //'use strict'
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);  // 报错

//******************************
// 一般函数中的this(严格模式)为undefined  非严格模式下为全局变量
// 严格模式下 this指向undefined  非严格模式下 指向window
function fun(){
    'use strict'
    console.log(this);
}
fun();

function fun1(){
    console.log(this);
}
fun1();
// 可以用此特性来判断当前是否为严格模式
function isStrictMode(){
    //'use strict'
    return this === undefined ? true : false;
}
isStrictMode();


//******************************************
// 1.严格模式下禁止删除不可改变的属性和未定义的变量

//非严格
var str = "abc";
function sloppyFunc(){
    str.length = 7;
    console.log(str.length);
}
sloppyFunc();

//严格
var str = "abc";
function sloppyFunc(){
    'use strict'
    str.length = 7;
    console.log(str.length);
}
sloppyFunc();  //报错

// 2.严格模式下禁止函数参数重名

// 非严格
function f(a,a,b){
    return a+b;
}
f(2,3,4);  // 7  第二个参数覆盖了第一个参数


//严格
'use strict'
function f(a,a,b){
    return a+b;
}
f(2,3,4);   //报错

