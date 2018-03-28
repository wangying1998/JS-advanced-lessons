// 函数对象的方法
//  call   apply   注意传参方法

// bind 绑定  将函数与调用实体强制绑定在一起，无论在何处调用该函数，都会调用绑定的实体

// 1.
var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
		foo();
    }
};
obj.test();   // 45

//
var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
		foo.bind(this)();// 等同于 var fee = foo.bind(this); fee();
		foo();
    }
};
obj.test();
//  23   45

// 2.  绑定  传参

// 函数功能  判断value是否在range所表示的范围内
var checkNumericRange = function (value) {
    if (typeof value !== 'number')
        return false;
    else
        return value >= this.minimum && value <= this.maximum;
};
var range = { minimum: 10, maximum: 20 };
var boundCheckNumericRange = checkNumericRange.bind(range);    // 与range绑定
var result = boundCheckNumericRange (12); // 相当于range.boundCheckNumericRange (12)
console.log(result);  //true

//
var displayArgs = function (val1, val2, val3, val4) {
    console.log(val1 + " " + val2 + " " + val3 + " " + val4);
};
var emptyObject = {};
var displayArgs2 = displayArgs.bind(emptyObject, 12, "a");   // 绑定emptyObject 并且默认前两个参数
displayArgs2("b", "c");//  直接传后两个参数即可    Output: 12 a b c


// toString  valueOf
// 继承自Object.prototype的方法，返回对象的字符串表示形式
var foo = function () {
    console.log("foo");
};
console.log(foo.toString()," ___ ",typeof foo.toString());
/*
function () {
    console.log("foo");
}  ___  string
 */
console.log(foo.valueOf()," ___ ",typeof foo.valueOf());
/*
function () {
    console.log("foo");
} " ___ " "function"
*/

console.log(foo.hasOwnProperty("toString"));  // false
console.log(Object.prototype.hasOwnProperty("toString"));  // true

console.log(foo.hasOwnProperty("valueOf"));  // false
console.log(Object.prototype.hasOwnProperty("valueOf"));  // true

