//闭包：是由函数和与其相关的引用环境组合而成的实体
//闭包：是词法作用域中的函数和其相关变量的包裹体
function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3 = f1();
//观察f1中的x变量
console.log(f3);// 2
console.log(f3);// 2


// 函数f2和变量x形成一个闭包
function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2;   //返回函数对象
}
var f3 = f1();
//观察f1中的x变量
console.log(f3());// 1
console.log(f3());// 2


function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));// 6    5+1
console.log(inc(2));// 8    6+2
inc = createInc(5);
console.log(inc(1));// 6


function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));// 6
console.log(inc(2));// 8
var inc2 = createInc(5);
console.log(inc(1));// 9
console.log(inc2(1));// 6


//若一个函数离开了它被创建时的作用域，它还是会与这个作用域的变量相关联
//闭包是一个函数外加上该函数创建时所建立的作用域
function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();// 1
a();// 2
b();// 1






