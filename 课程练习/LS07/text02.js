//函数参数的数量问题
/**
 * 实参数大于形参数  通过函数对象属性arguments获得所有实参，类数组对象
 * 实参数小于形参数  少的参数值是undefined 可以用||来给出默认值
 */

//实参数大于形参数
function test() {
    console.log(arguments);   //是一个类数组
    console.log(test.arguments==arguments,arguments);  //false  是一个类数组
    console.log(arguments.length);   //2 实参数目
	console.log(typeof arguments);   // object
	console.log(arguments instanceof Array);  // false
	console.log(arguments instanceof Object);   //true
    console.log(Array.prototype.slice.call(arguments));  //切片  变成数组
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
test("hello,", "world!");//"hello,world!"


//实参数小于形参数
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));

/* 参数诶性与传递方式（值传递，引用传递） */
//1.实参为基本数据类型时，形参改变不影响实参（值传递）
var a = 1;
function foo(x) {
    console.log("a:",a," x:",x);
    x = 2;//step 2222
    console.log("a:",a," x:",x);//step 3333
}

console.log("a:",a);
foo(a);// step 1111
console.log("a:",a); // step 4444  a仍为1

//2.实参为引用传递时，形参改变影响实参（引用传递）
//引用传递
var obj = {x:1};
function fee(o){
    console.log("obj.x :",obj.x," o.x :",o.x);
    o.x = 3;// step 2222
    console.log("obj.x :",obj.x," o.x :",o.x);// step 3333
}
console.log("obj.x :",obj.x);
fee(obj);// step 1111   obj.x=1
console.log("obj.x :",obj.x);//step 4444  obj.x被改写为3
