// 数组的方法和相关高阶函数
// 数组静态方法（构造器函数对象方法）
const bar = ["a", "b", "c"];
Array.from(bar);// ["a", "b", "c"]
Array.from('foo');// ["f", "o", "o"]

Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]
Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]

var arr1 = [1,3,4];
console.log(Array.isArray(arr1));// true

function foo(){
    console.log(Array.isArray(arguments));
    //console.log(arguments.pop());//这样是否能调用？数组与类数组对象
    console.log(Array.prototype.pop.call(arguments));
}
foo(3,2,5);


