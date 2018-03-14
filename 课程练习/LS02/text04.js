//简单对象

var obj = {x:2,y:3};
//obj的原型是Object.prototype,并且obj继承的属性和方法都源于这个原型
console.log(obj.__proto__ == Object.prototype);  //true
console.log(Object.prototype);

//数组
var arr = [1,2,3,4,5];
//arr的原型是Array.prototype,并且arr继承的属性和方法都源于这个原型
console.log(arr.__proto__ === Array.prototype);  //true
console.log(Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);  //true

//函数对象
function foo() { 
//foo的原型是Function.prototype,并且foo继承的属性和方法都源于这个原型
    console.log("foo function!");
};
console.log(foo.__proto__ === Function.prototype);  //true
console.log(foo.__proto__.__proto__ === Object.prototype);  //true

console.log(obj instanceof Object);  //true
console.log(arr instanceof Object);  //true
console.log(foo instanceof Object);  //true
console.log(foo === window.foo);    //true

//正则对象


//所有对象都有属性，查看对象的方法
for(var k in obj)
{
    //只能遍历整个原型链上所有可遍历的属性
    console.log(k,obj[k]);  // k 是属性名
}

console.log(Object.keys(obj));//['x','y']  返回一个数组，包含自身所有可枚举的属性

console.log("x" in obj);//  true  能够检查整个原型连上的属性，包括不可遍历的属性


//函数也是对象，也不例外，函数也有若干属性 查看foo函数都有哪些属性
for(var k in foo){
    console.log(k,foo[k]);//没有自身属性，所以没有输出
}
console.log("call" in foo);//true
console.log("apply" in foo);//true
console.log("arguments" in foo);//true








