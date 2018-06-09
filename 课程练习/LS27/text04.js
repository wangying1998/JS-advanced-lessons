// let const 特性


// ES6中 let和const 不进行变量提升特性
//var 声明变量
console.log(a);
var a = 1;
console.log(a);

//预解析 上述代码等效于
var a;
console.log(a);
a = 1;
console.log(a);
// undefined  1

// 
var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        var temp = "Hi!";
    }
}
f();
// 上述代码预解析成如下
var temp;
temp = new Date();
function f() {
    var temp;
    console.log(temp);     // undefined
    if(false){
        temp = "Hi!";
    }
}
f();

//let和const不存在变量提升
console.log(a);//报错 a未定义
let a = 2;
console.log(a);


