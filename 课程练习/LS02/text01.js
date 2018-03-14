//{x:1} == {x:1};
//false  引用之间的比较

/*
不同类型的值
    ·Number :整数 浮点数 NaN Infinity -Infinity +0 -0
    ·String :空字符 字符和字符串 转义字符
    ·Boolean :true false
    ·Null  Undefined
*/

//Number
var a = 20;
var b = 23.4;
console.log(parseInt(b)); // 23 如果是非数字，先转换成字符串，再转换成Number类型
console.log(parseFloat("23.456xy")); // 23.456
console.log(parseFloat("xx23.456xy")); // NaN 开头非数字

/*·函数 对象属性 对象方法之间的关系
   函数 若是某一对象的属性 称其为方法 故 方法也是对象的属性
   方法也是属性
*/

//注：parseInt parseFloat 都是全局方法，即window全局对象的方法
console.log(parseInt === window.parseInt); //true
console.log(parseFloat === window.parseFloat); //true

var b = 23.4;
console.log(Math.ceil(b));  //向上取整 24
console.log(Math.floor(b)); //向下取整 23
console.log(Math.round(b)); //四舍五入 23
var c = 5e2; //指数形式 = 5e+2
console.log(c); //500
console.log(typeof Math);  //object

//NaN
var x = Number("xx123");
console.log(x); // NaN
isNaN(x); // true
typeof NaN; //number

console.log(Math.log(-1));//NaN
console.log(Math.acos(2));//NaN 反余弦
console.log(NaN === NaN);//false

/*Math中的方法：
·abs(x)  绝对值
acos(x)  反余弦  asin(x)  反正弦  atan(x)  反正切
atan2(y,x)  返回从x轴到点(x,y)的角度
cos(x)  余弦     sin(x)  正弦     tan(x)  正切
·ceil(x) 向上取整   floor(x)  向下取整
·random()  返回[0,1)之间的随机数
·round()  四舍五入
exp(x)  返回e的指数
log(x)  自然对数
·max(x,y)  取x和y的最大值   min(x,y) 取x和y的最小值
·pow(x,y)  返回x的y次幂   sqrt(x)  求平方根
*/


//Infinity与-Infinity
var y1 = 2/0;
console.log(y1);//Infinity
var y2 = -2/0;
console.log(y2);//-Infinity
isFinite(y2);//false，非有限数
isFinite(23);//true，有限数

//0与-0
var z1 = 1/Infinity;
console.log(z1);//0
var z2 = -1/Infinity;
console.log(z2);//-0