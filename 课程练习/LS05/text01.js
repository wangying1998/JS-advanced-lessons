// JS赋值运算符

// 注意=与==
var a = 34;
if(a = 45){
    console.log('hi');
}
    // hi

var a = 34;
if(45 = a){         // 表达式反写 可避免判断时出现的错误
    console.log('hi');
}
    // 报错

var b = 34;
if(45 == b){     //表达式反写
    console.log("是否会输出？");
}

//**************************************** */
// JS算术运算符
// ·算术运算符与类型转换
'1' + '2';  // 12
'1' + 2;    // 12
1 + {};     // "1[object Object]"
true + true;  // 2
'5'-2;     // 3

//
// 隐式类型转换
var x = '1';
console.log(x++);  // 2   Number
var a = '1';
console.log(x+1);  // 11  String

//
var i=1;
var y = ++i + ++i + ++i;
console.log(y);  //  2 + 3 + 4 = 9

//******************************************* */
/* JS关系运算符
==    如果类型不同，先转换再比较(一般引用类型向基本类型转换)
===   若类型不同则false，若类型相同，则判断同==
*/
console.log(3 === 3);    // true
console.log(3 === '3');    // false
console.log(3 == '3');    // true
console.log(3 == new String(3));    // true
console.log(3 === new String(3));    // false

//
var obj1 = new String('xyz');
var obj2 = new String('xyz');
console.log('xyz' === obj1);    // false  类型不同
console.log('xyz' == obj1);    // true  ==会进行隐式类型转换再比较 故相等
console.log(obj1 == obj2);    // false  指向的不是同一块内存
console.log(obj1 === obj2);    // false 同上
console.log(obj1 === new String('xyz'));    // false  不是同一块内存

//
var obj1 = new String('xyz');
var obj2 = obj1;
console.log('xyz' === obj1);    // false  类型不同
console.log(obj1 == obj2);    // true  指向同一块内存
console.log(obj1 === obj2);    // true  指向同一块内存
console.log(obj1 === new String('xyz'));    // false 内存指向不同

//  !=  !==  与 ==  === 取反即可
var obj1 = new String('xyz');
var obj2 = new String('xyz');
console.log('xyz' != obj1);    // false
console.log(obj1 !== obj2);    // true
console.log(obj1 != obj2);    // true
console.log(obj1 != new String('xyz'));    // true


//  一般引用类型向基本类型转化
console.log(2 == 2);   // true
console.log(new Number(2) == new Number(2));  // false
console.log(2 == new Number(2));  // true
