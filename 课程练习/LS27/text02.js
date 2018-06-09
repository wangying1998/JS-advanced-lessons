//使用了let就可以避免var所带来的问题
let userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};

let a=2,b=3;
if(a<b){
    let userId = 234;
}
// 点击之后 输出  123


//let 定义的变量 并不像 var 那样直接作为全局对象的属性
var x = 23;
let y = 34;
console.log(window.x,window.y);//23 undefined


//使用var可能存在变量共享问题
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}
//console.log("i：",i);


//使用let可有效避免变量共享问题
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}
