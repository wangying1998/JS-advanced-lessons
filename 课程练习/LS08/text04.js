// 高阶函数  一般应用
// 1.函数作为参数传递
function add(x, y, f) {
    return f(x) + f(y);
}
add(2,3,function(z){return z*z;});
add(2,-3,Math.abs);//绝对值
add(2,3,Math.sqrt);//开方

//练习使用高阶函数实现下述公式，要求函数复用
//z = 2*(x+1)-3*y*y;
//c = 2*a*a-3*(b-1);
//k = 2*(i+1)-3(j-1);

function foo(x,y,c1,c2){
	return 2*c1(x)-3*c2(y);
}
function f1(x){
	return x+1;
}
function f2(x){
	return x-1;
}
function f3(x){
	return x*x;
}
foo(1,1,f1,f3);//1
foo(1,1,f3,f2);//2
foo(1,1,f1,f2);//4

// 
var word_2 = "do another thing.";
var function_1=function(callback){
    this.word_1 = "do something.";
    console.log(this.word_1);
    (callback && typeof(callback) === "function") && callback();
};
var function_2=function(){console.log(this.word_2)};
function_1(function_2);

// do something.
// do another thing.

// 2. 数组相关的高阶函数 map reduce pow filter sort
// 全部平方
function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(pow);
// [1, 4, 9, 16, 25, 36, 49, 64, 81]

//将数组所有元素改为数字类型
var result = ["1", "2", "3"].map(function(val) {
    return parseInt(val);
});
for (var i=0;i<result.length;i++){
    console.log(typeof result[i]);
}

//reduce 相当于 [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
var arr = [1, 3, 5, 7, 9];
arr.reduce(function f(x, y) {
    return x + y;
}); // 25

//filter 数组过滤 ，返回为false的将被过滤掉
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
r; // [1, 5, 9, 15]

// sort 排序
var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
}); // [1, 2, 10, 20]

// 3.常用的回调函数
// 设置超时和时间间隔的方法、异步请求、事件监听和处理

//超时
var timeOutId = setTimeout( function () {
    console.log("你已超时！");
},1000);
// setTimeout 需要用 clearTimeout(timeOutId) 撤销

//周期执行  setInterval()
var timeInterval = setInterval(function () {
    console.log("Hi");
},1000);
//clearInterval(timeInterval);

// setTimeout 和 setInterval 返回的都是一个数值

//事件监听回调实例
document.addEventListener("click", function(){
    //document.getElementById("demo").innerHTML = "Hello World";
    console.log("click callback");
});


/* 函数作为返回值输出 */
var x=12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：",obj.fun3());
/*
 * 输出： function fun2() {
        return this.x;//若改为 return this;
    } 
 */
console.log("输出：",obj.fun3()());   // 在对象的基础上调用
// 输出：12
console.log("输出：",obj.fun4());   // 此时调用的主体是window
// 输出：34

