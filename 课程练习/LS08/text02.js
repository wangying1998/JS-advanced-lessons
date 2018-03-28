//函数对象的属性及方法
// 属性
// - length  形参数目    arguments.length  实参数目
function fun(a,b,c){
    console.log(a+b+c);
    console.log(arguments.length);
}
fun(1,2,3,4);
fun.length;
    // 6    4    3

// 判断函数形参与实参是否对应
function checkVarCount(a,b){
    if(checkVarCount.length !== arguments.length)
        console.log("形参与实参个数不对应");
    else
        console.log("个数对应");
}
checkVarCount(1,2);  // 个数对应
checkVarCount(1);  // 形参与实参个数不对应


// - caller ， callee(arguments的属性，常用于递归调用)

// caller  返回调用当前函数的函数
// 只有当函数正在执行时才被定义，未被调用时caller值是null

function fun(){
    if(fun.caller == null){
        console.log("顶层调用");
    }
    else{
        console.log('该函数调用')
    }
}
fun();   // 顶层调用
function foo(){
    fun();
}
foo();  // 该函数调用

//
var obj = {
    foo1:function(){
        console.log(this.foo1.caller);
    },
    foo2:function abc(){
        this.foo1();
    }
};
obj.foo1();  // null  此时未执行foo2  故foo1未被调用  caller值为null
obj.foo2(); 
/*  此时执行foo2 调用了foo1  返回结果是调用了foo1的foo2
ƒ abc(){
    this.foo1();
}
*/


// callee  返回正被执行的Funtion对象，即指定的Function对象的正文
//arguments的属性 该属性仅当相关函数正在执行时可用，通常被用来递归调用匿名函数
var func = function(n){
    if (n <= 0)
        return 1;
    else
        return n * func(n - 1);
        //return n * arguments.callee(n - 1);
};
console.log(func(4));  // 24

// 立即执行表达式
(function(n){
    if (n <= 0)
        return 1;
    else
        return n * arguments.callee(n - 1);
}(4));   // 24

/**********************************************************/
// prototype 属性  （重要!!!）
/* 获取对象的原型。每一个构造函数都有一个prototype属性，
   指向另一个对象，这个对象的所有属性和方法，都会被构造函数的实例继承
 */
function Man(name, age) {
    this.name = name;
    this.age = age;
}
Man.prototype.sex = "M";
Man.prototype.sayHi = function () {
    console.log("Hi,i'm",this.name);
};
var li = new Man("Leo", 10);
li.sayHi();//
console.log(li.sex);//M

Man.prototype.isStrong = true;
console.log(li.isStrong);//true

//
var a = [];
a.__proto__ === Array.prototype;  // true

var b = {};
b.__proto__ === Object.prototype;  // true

var c = function(){};
c.__proto__ === Function.prototype;  // true



//
// 函数对象属性之 constructor 获取创建某个对象的构造函数。可以用来判断对象是哪一类
var x = new String("Hello");
if (x.constructor == String){
    console.log("Object is a String.");
}

function MyObj() {
    this.number = 1;
}
var y = new MyObj();
if (y.constructor == MyObj){
    console.log("Object constructor is MyObj.");
}




