//JS函数及函数参数

/* 1.函数的定义与调用 */
/* 3种定义方式
    ·通过函数声明的形式来定义（须有函数名）
    ·通过函数表达式的形式来定义（可以使匿名函数）
    ·通过Function构造函数实例化的形式来定义
*/
//
function max(a,b){
    return a>b?a:b;
}
max(2,3);  // 3
//
var max = function(a,b){
    return a>b ? a : b;
}
max(2,3);  // 3
//
var max = new Function('a','b','return a>b?a:b');
max(2,3);  // 3

/* 4种函数调用方式（注意调用函数的主体）
  - 1.作为函数直接调用（非严格模式下this为全局对象，严格模式下this为undefined）
  - 2.作为方法调用（this为调用此方法的对象）
  - 3.通过call()和apply()间接调用（this为函数对象的call/apply方法的首个参数，移花接木）
  - 4.作为构造函数调用（this为实例化出来的对象）
 */

// 1.
function fun1(){
    console.log("this is ",this);
}
fun1();   // window

function fun2(){
    function fun3(){
        console.log("this is ",this);
    }
    fun3();
}
fun2();   // window

// 2.
var obj = {
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();   // 23  {x: 23, test: ƒ}
//this是此对象

// 3.  同时注意call和apply用法 传参时的区别
var obj1 = {name:'a'};
var obj2 = {name:'b'};
obj1.foo = function(a,b){
    console.log(this.name);
    console.log(a>b?a:b);
};
obj1.foo(3,4);    // a  4
obj1.foo.call(obj2,2,3);    // b  3


var obj1 = {name:'a'};
var obj2 = {name:'b'};
obj1.foo = function(a,b){
    console.log(this.name);
    console.log(a>b?a:b);
};
obj1.foo(3,4);    // a  4
obj1.foo.apply(obj2,[2,3]);    // b  3

//间接调用 实例二 移花接木 吸星大法
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};
var me = {
    name:"ABC"
};
bird.fly(5,6);
fish.swim.call(me,3,4);
bird.fly.call(me,7,8);
//swim(1,2);与swim.call(null,1,2);相同
结果
// i'm:polly i can fly ___ 5 6
// i'm ABC i cam swim ___ 3 4
// i'm:ABC i can fly ___ 7 8

// 4.
function person(name){
    this.name = name;
}
person.prototype.sayHi = function(){
    console.log("Hi,I'm "+this.name);
}
var p1 = new person("Mike");
p1.sayHi();  // Hi,I'm Mike   this指向实例化的对象p1

//
var obj = {name:"Amy"};
//给obj动态添加方法
var sayHi = function () {
    console.log("Hi，i'm",this.name);
};
obj.sayHi = sayHi;//添加给对象添加方法
obj.sayHi();   // Hi，i'm Amy  this指向对象

var name = "全局";
sayHi();    // Hi，i'm 全局  this指向全局

//高阶函数
var fun1 = function () {
    return function fun2() {
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log(obj.fun3());//输出什么
console.log(obj.fun3()());//输出什么
console.log(obj.fun4());//输出什么
/*
ƒ fun2() {
    return this.x;//若改为 return this;
}

undefined

1
*/


var x=45;
var test = function(){
	console.log("输出",this.x);
}
var obj = {
	x:23
}
obj.test = test;
obj.test();      // 输出 23     调用对象作为主体
test();       // 输出 45      调用window作为主体


var x=45;
var obj = {
	x:23,
	test:function(){
		function foo(){
			console.log(this.x);
		}
		foo();
	}
}
obj.test();   // 45    调用window作为主体
