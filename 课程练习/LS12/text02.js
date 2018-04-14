//闭包常见形式（以函数对象形式返回）

//
var tmp = 100;//注意：词法作用域,形成的闭包不包含此行的变量tmp
function foo(x) {
    var tmp = 3;//注意：词法作用域
    // 若屏蔽此行，会输出 106 107 108  但是tmp=100 仍不是闭包所包含的
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); // fee 形成了一个闭包 和 tmp=3   不包括 tmp=100
fee(10);//16
fee(10);//17
fee(10);//18


//
function foo(x) {
    var tmp = 3;
    return function (y) {
        x.count = x.count ? x.count + 1 : 1;
        console.log(x + y + tmp,x.count);
    }
}
var age = new Number(2);
var bar = foo(age); //和相关作用域形成了一个闭包
bar(10); // 15 1
bar(10); // 15 2
bar(10); // 15 3

//
function fn() {
    var max = 10;//若屏蔽此行，则输出为 100
    return function bar(x) {
        if(x > max){
            console.log(x);
        }else {
            console.log(max);
        }
    }
}
var f1 = fn();
var max = 100;   //形成的闭包不包括此处max
f1(15);   // 15


//
function counter() {
    var n = 0;
    return {
        count:function () {return ++n;},
        reset:function () {n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count());    // 1
console.log(d.count());    // 1
console.log(c.reset());    // 0
console.log(c.count());    // 1
console.log(d.count());    // 2






