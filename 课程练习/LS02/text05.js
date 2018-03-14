//包装对象
var a = 123;
var b = new Number(a);

console.log(a == b);
console.log(a === b);//true or false 为什么

//临时包装对象
var str = "abcde";
console.log(str.length);//5 临时包装成了String对象 有length属性
str.length = 1;
console.log(str.length,str);//5 "abcde" 临时包装对象并不影响原始值
//临时包装对想在使用后立即释放

var arr = [1,2,3,4,5];
console.log(arr.length);//5
arr.length = 1;
console.log(arr.length,arr);//1 [1]