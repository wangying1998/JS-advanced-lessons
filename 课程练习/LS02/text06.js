//数据类型之间的转换 ：隐式类型转换  显式类型转换
/*
    隐式类型转换
        使用关系运算符时的转换（==、>、<、引用类型和基本类型比较时）
        使用算数运算符时的转换（'img'+ 3 + '.jpg';  “25”-0;）
        使用逻辑运算符时的转换（  !!0;  ）
        执行流程语句时的转换（if(obj){...}）
    显式类型转换（使代码更清晰）
        Boolean（）、Number（）、String（）、Object（）
        数转为字符串（toString()、toFixed()、toPrecision()、toExponential()）
        字符串转为数字（parseInt()、parseFloat()）
        对象转换为原始值（toString()、valueOf()）
*/

// 隐式
//比较运算符 与 隐式类型转换
var a = 3;
var b = 4;
console.log(typeof (a>b),a>b);   // Boolean  false
console.log(typeof (a==b),a==b);  // Boolean  false
console.log(typeof (a<b),a<b);  // Boolean  true

//算数运算符 与 隐式类型转换 + -
var c = "img" + 3 +".jpg";  // img3.jpg
var d = "23" - 5;  // 18
console.log(c,d);

//逻辑运算符 与 隐式类型转换 + -
var e = !23;
var f = !!34;//!!""   !!0   !!"abc"  !!undefined  !!null
var g = !!{};
console.log(e,f,g);  // false  true  true

// 流程语句 与 隐式类型转换
var h = {x:1};
//var h = "";
if(h){   // 对象都是true
    console.log("h:",h);
}









/* 其他类型转换成Boolean类型 */
// 转换方式 ：Boolean()   、  !!  、 ? :
console.log(Boolean(undefined)); //false
console.log(Boolean(null));  //false
console.log(Boolean(0));  //false
console.log(Boolean(NaN));  //false
console.log(Boolean(1));  //true
console.log(Boolean(""));  //false
console.log(Boolean("abc"));  //true
console.log(Boolean({}));  //true  对象永远是true

if(new Boolean(false)){    // 对象永远是true
    console.log("执行");
}  // 执行

/* 其他类型转换成Number类型 */
// 转换方式 ：Number()   +value  parseFloat()  parseInt()
console.log(Number(undefined));  // NaN
console.log(Number(null));  // 0
console.log(Number(true));  // 1
console.log(Number(false));  // 0
console.log(Number(""));  // 0
console.log(Number("123.34"));  // 123.34   Number()  只能用于转换全是数字字符的字符串
console.log(Number("123.45xx"));  // NaN
console.log(Number("abc"));  // NaN
console.log(Number("123456xxx"));  // NaN
console.log(Number("32343,345xx"));  // NaN
console.log(Number({x:1,y:2}));  // NaN

console.log(parseInt("123.345xx"));  // 123
console.log(parseInt("32343,345xx"));  // 32343
console.log(parseInt("xx32343,345xx"));  // NaN  要求开头必须是数字 转换成整型

console.log(parseFloat("123.345xx"));  // 123.345
console.log(parseFloat("32343,345xx"));  // 32343
console.log(parseFloat("xx32343,345xx"));  // NaN  要求开头必须是数字  转换成float型

/* 其他类型转换成String类型 */
//转换方式 ：String()   '' + value   value.toString()
console.log(String(undefined));  // undefined
console.log(String(null));  // null
console.log(String(true));  // true
console.log(String(false));  // false
console.log(String(0));  // 0
console.log(String(234));  // 234
console.log(String({x:1,y:2}));  // [object object]

console.log(234 + "abc");  // 234abc
var a = 12345;
a.toString();  // "12345"