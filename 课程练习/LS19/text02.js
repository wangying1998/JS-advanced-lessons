// Date方法（静态方法、原型方法）

/* 静态方法（构造器函数对象方法）
Date.now();
Date.parse(dateTimeString);//转成毫秒，从1970年1月1日00:00:00开始计算
Date.UTC(year,mouth,date?,hour?,minutes?,seconds?,milliseconds?);
*/
/* 原型方法
Date.prototype.get<Unit>()   Date.prototype.getUTC<Unit>()
Date.prototype.set<Unit>()   Date.prototype.setUTC<Unit>()
Date.prototype.toTimeString() Date.prototype.toLocalTimeString()
Date.prototype.toDateString()  Date.prototype.toString()
Date.prototype.toLocalString()  Date.prototype.toISOString()
 Date.prototype.toJSON()
*/

//Date静态方法（Date构造器函数对象的方法）GMT 格林尼治时间
console.log(Date.now());//以毫秒为单位返回当前时间（从1970年1月1日00:00:00开始计算）
console.log((new Date()).getTime());

console.log(Date.parse("1970-01-01"));// dateTimeString字符串转换成毫秒  0
console.log(Date.parse("1970-01-02"));  // 86400000

console.log(Date.UTC(2017,9,1));//将给定的日期转换成毫秒,解释为UTC 协调世界时间


//Date原型方法 getter和setter相关
var d = new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDate(),d.getDay(),d.getHours());
console.log(d.getTimezoneOffset());
d.setDate(11);
console.log(d.getFullYear(),d.getMonth(),d.getDate(),d.getDay(),d.getHours());
d.setFullYear(1999,5,3);
console.log(d.getFullYear(),d.getMonth(),d.getDate(),d.getDay(),d.getHours());

//Date原型方法 转成字符串相关
var d = new Date(2012,3,21,15,7,23,234);
console.log(d.toTimeString(),"___",d.toLocaleTimeString()); // 15:07:23 GMT+0800 (中国标准时间) ___ 下午3:07:23
console.log(d.toDateString(),"___",d.toLocaleDateString()); // Sat Apr 21 2012 ___ 2012/4/21
console.log(d.toJSON()); // 2012-04-21T07:07:23.234Z



