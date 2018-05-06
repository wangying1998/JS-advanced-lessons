// 原型方法
//数组添加删除元素的原型方法 破坏性
//Array.prototype.shift
var arr2 = [1,3,5,7];
var shiftElement = arr2.shift();//返回去除的元素
console.log(shiftElement,arr2); //1   [3, 5, 7]

var newLength = arr2.unshift(1,2);//返回新的数组长度
console.log(newLength,arr2);  // 5   [1, 2, 3, 5, 7]

var popElement = arr2.pop();//返回pop出去的元素
console.log(popElement,arr2); // 7   [1, 2, 3, 5]

var newLength = arr2.push(77,88);//返回新的数组长度
console.log(newLength,arr2); // 6   [1, 2, 3, 5, 77, 88]

//思考：如何通过push将两个数组组合成一个数组
var arr3 = ["a","b"];
var arr4 = ["c","d"];
Array.prototype.push.apply(arr3,arr4);
console.log(arr3);// ["a","b","c","d"]

//splice 从start开始，移除deleteCount个元素，并插入给定的元素
var arr5 = ["a","b","c","d"];
var spliceElements = arr5.splice(1,2,"x");//返回切掉的数组
console.log(spliceElements,arr5);//["b", "c"]  ["a", "x", "d"]
//arr5.splice(-2,2,"x");//["x", "d"]


// 排序和颠倒元素顺序 破坏性
//Array.prototype.reverse()
var arr1 = [1,2,3];
arr1.reverse();
console.log(arr1); // [3,2,1]

//Array.prototype.sort(compareFunction？)
var arr2 = ["banana","apple","pear","orange"];
arr2.sort();
console.log(arr2);  // ["apple", "banana", "orange", "pear"]
//让arr2按第二个字母排序
var arr2 = ["banana","apple","pear","orange"];
arr2.sort(function(a,b){return a[1]>b[1];});
console.log(arr2);

//思考sort中的参数
var arr3 = [-1,-20,7,50];
arr3.sort();
console.log(arr3);//结果是否是预计结果,如何解决
//sort传递的函数对象
arr3.sort(function (a,b) {return a-b;});//对于数字类型，大于0则交换，冒泡排序
//arr3.sort(function (a,b) {return a>b;});//对于布尔类型，true则交换，冒泡排序


//合并、切分和连接 非破坏性
//Array.prototype.concat(arr1?,arr2?,...)
var arr4 = ["banana","apple"];
var arr5 = ["pear","orange"];
var newArray = arr4.concat(arr5);
console.log(newArray,arr4,arr5);
 // ["banana", "apple", "pear", "orange"]  ["banana", "apple"]  ["pear", "orange"]

//Array.prototype.slice(begin?,end?)注意：不要和splice弄混了
var arr6 = [1,2,3,4,5];
var newArray = arr6.slice(2,4);
console.log(newArray,arr6); // [3,4]  [1,2,3,4,5]
var newArray2 = arr6.slice(2);
console.log(newArray2,arr6); // [3,4,5]  [1,2,3,4,5]

//Array.prototype.join(separator?)
var arr7 = [3,4,5];
var joinReturn = arr7.join("--");
console.log(joinReturn,arr7); // 3--4--5  [3,4,5]
console.log(typeof joinReturn); // string

//注意：稀疏数组调用join
console.log([3,,,,,,5].join("*"));// 3******5


// 值的查找 非破坏性
//Array.prototype.indexOf(searchValue,startIndex?)
var arr8 = [1,3,5,5,7,9,5];
console.log(arr8.indexOf(5));// 2
console.log(arr8.indexOf(5,3));// 3
console.log(arr8.indexOf(5,5));// 6

//Array.prototype.lastIndexOf(searchElement,startIndex?)
console.log(arr8.lastIndexOf(5));// 6
console.log(arr8.lastIndexOf(5,3));// 3
console.log(arr8.lastIndexOf(5,5));// 3




