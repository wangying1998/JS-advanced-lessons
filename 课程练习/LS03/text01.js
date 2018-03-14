// 数据类型进阶
/*
Numbe类型进阶
    Number基本数据类型变量有与其对应的Number包装对象，
    当访问Number基本数据类型属性或方法时创建临时包装对象，
    访问的都是对象中的属性或方法
    （注：访问对象属性时，首先访问自身属性，访问不到时，则会在原型链上寻找对应的属性和方法）
*/
//Number构造器属性（静态属性）
Number.MAX_VALUE
Number.MIN_VALUE
Number.NaN
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY

//Number原型方法(Number对象继承的方法）
// Number.prototype.toFixed();
// Number.prototype.toPrecision();
// Number.prototype.toString();
// Number.prototype.toExponential();
var n1 = 12345.6789;
console.log(n1.toFixed(2));  // 12345.68  保留小数位数
console.log(n1.toPrecision(2));  // 1.2e+4  变成指数形式 两个有效数字
console.log(n1.toString());  // 变成字符串
console.log(n1.toExponential(2));  // 1.23e+4  变成指数形式 小数位数2位

//
console.log(NaN === NaN);    // false
console.log(isNaN("12,3"));  // true
console.log(Math.floor(3.8));  // 3
console.log(Math.floor(-3.8));  // -4
console.log(Math.ceil(3.2));  // 4
console.log(Math.ceil(-3.2));  // -3
console.log(Math.round(-3.2));  // -3
console.log(Math.round(-3.5));  // -3
console.log(Math.round(-3.8));  // -4


/* 
String类型进阶
    String基本数据类型变量有与其对应的String包装对象，
    当访问String基本数据类型属性或方法时创建临时包装对象，
    访问的都是对象中的属性或方法
    （注：访问对象属性时，首先访问自身属性，访问不到时，则会在原型链上寻找对应的属性和方法）
*/
//字符串比较
console.log("A" > "a");   //false
console.log("B".localeCompare("A")); //考虑本地化的字符排序，返回0或非0
console.log("A".localeCompare("A")); //考虑本地化的字符排序，返回0或非0
console.log("A".localeCompare("B"));

//字符串链接
var a = "abc";
var b = "def";
var c = a+b;   // abcdef

//字符串提取
//String.prototype.charAt(pos);
//String.prototype.charCodeAt(pos);
//String.prototype.slice(start,end?);
//String.prototype.substr(start,length?)
//String.prototype.substring(start,end?);
//String.prototype.split(separator?,limit?);

//字符串常用方法，字符串的方法源于String.prototype

var str2 = "abcdef".slice(2);      // cdef
var str3 = "abcdef".slice(2,5);    // cde
var str4 = "abcdef".slice(-2);     // ef
var str5 = "abcdef".slice(2,-2);   // cd

var arr6 = "abcdef".split("c");//返回数组   ["ab","def"]
var arr7 = "abcdef".split("c",1);  //  ["ab"]
var arr8 = "abcdef".split("c",2);  //  ["ab","def"]

var str9 = "abcdef".charAt(2);   // c
var str10 = "abcdef".charCodeAt(3);  // 100
var str11 = "abcdefabcdef".indexOf("d",1);  // 3
var str12 = "abcdefabcdef".indexOf("d",4);//从第4个开始找   9

//substr 与 substring的区别
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度    cdefg
console.log(str13,str14);//str13 未受到破坏

var str15 = str13.substring(2,5);//后一个参数代表第几个end
console.log(str13,str15);//str13 未受到破坏



//Part 222222222 字符串变换
//String.prototype.trim( );
//String.prototype.concat(str1?,str2?);
//String.prototype.toLowerCase( );
//String.prototype.toLocaleLowerCase( );
//String.prototype.toUpperCase( );
//String.prototype.toLocaleUpperCase( );
var str16 = "aaa".concat("bbb");//返回字符串   aaabbb
var str17 = "    abc def     \r\n  ".trim();  //返回已移除前导空格、尾随空格和行终止符的原始字符串   abc def
var str18 = "abcDEF".toLowerCase();   //变成小写  abcdef
var str19 = "abcDEF".toUpperCase();   //变成大写  ABCDEF

//Part 333333333 检索和比较
//String.prototype.indexOf(searchingString,position?);
//String.prototype.lastIndexOf(searchingString,position?);
//String.prototype.localeCompare(other);
var indexOf = "abcDEFabcDEFabcDEF".indexOf("D",6);    //从左向右   9
var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D");   //从右向左检索   15

/* 所有对象都是真值 */







