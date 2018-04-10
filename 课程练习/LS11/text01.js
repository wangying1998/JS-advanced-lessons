// 立即执行表达式  IIFE
// Immediately-Invoked Function Expression    立即执行的函数表达式
// 立即执行表达式作用（建立函数作用域，解决ES5中没有块作用域的问题，如变量污染，变量共享等）

/* IIFE 的写法 （2种）  函数均可以是匿名函数 */
// 1.
(function foo(x,y){ 
    // .....
} (2,3));
// 2.
(function (x,y){
    // .....
})(2,3);

/***** 注意：IIFE是表达式，要使用分号结尾，否则可能会报错 *****/

// 与运算符结合的写法（执行函数、进行运算）
var i = function(){return 10;}();    // i 是 10

true && function(x,y){
    return x>y?x:y;
}(5,9);    // 9
    // 非布尔类型，与运算的短路问题，若左边为真，则直接返回原始右操作数，即右侧立即执行表达式的结果

! function(x,y){
    return x==y ? true : false;   // 此处返回true
}('5',5);    // 取非之后返回 false

!function(){return 2; }();  // false
!function(){return 0; }();  // true












