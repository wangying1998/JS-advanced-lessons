// 数组相关的高阶函数
// 数组原型方法（迭代-非破坏性-检测方法）thisValue可以指定callback中的this
// Array.prototype.forEach(callback,thisValue?) //注意并不返回新的数组
var arr1= [2,5,8];
arr1.forEach(function (a) {
    if(a>3){
        console.log(a,"大于3");
    }
    else {
        console.log(a,"不大于3");
    }
});
console.log(arr1); // [2,5,8]

// Array.prototype.every(callback,thisValue?) //返回一个布尔类型 若有不满足的将不再进行后续判断直接返回false
var arr2= [2,5,8];//[2,4,6]
var returnValue = arr2.every(function (a) {//判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    console.log(a);//不会输出8 遇到5后面不进行判断    2 5 
    return a%2===0;
});
console.log(returnValue);  // false

// Array.prototype.some(callback,thisValue?)//返回一个布尔类型 若有一部分满足的将不再进行后续判断，直接返回true
var arr2= [2,4,6];
var returnValue = arr2.some(function (a) {//判断数组元素是否含有偶数，若有满足的将不再进行后续判断
    console.log(a);//2
    return a%2===0;
});
console.log(returnValue); // true


// 数组原型方法（迭代-非破坏性-转换方法）
// Array.prototype.map(callback,thisValue?) //Map映射 返回新的数组
var arr2= [1,3,5,7,9];
var newArray = arr2.map(function (a) {
    return a*a;
});
console.log(newArray,arr2);  //  [1, 9, 25, 49, 81]  [1, 3, 5, 7, 9]

// Array.prototype.filter(callback,thisValue?) //Filter过滤 返回新的数组
var arr2= [1,3,5,7,9];
var newArray = arr2.filter(function (a) {//产生新数组，新数组的元素是返回为true的那些元素
    return (a>2&&a<8)?true:false;
});
console.log(newArray,arr2); //  [3, 5, 7]   [1, 3, 5, 7, 9]


// 数组原型方法（迭代-非破坏性-归约方法）
// Array.prototype.reduce(element,initialValue?) //从左向右迭代
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduce(add)); // 14

// Array.prototype.reduceRight(callback,initialValue?) //从右向左迭代
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduceRight(add));  // 14

//综合实例
function printArgs(prev,cur,i) {
    console.log("prev",prev,",cur:",cur,",i:",i);
    return prev+cur;
}
var arr4 = ["a","b","c","d"];
console.log(arr4.reduce(printArgs));
console.log(arr4.reduce(printArgs,"x"));
console.log(arr4.reduceRight(printArgs));
console.log(arr4.reduceRight(printArgs,"x"));

//思考案例：
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
});
console.log(flattened); // [0, 1, 2, 3, 4, 5]


//思考案例：计算数组中每个元素出现的次数
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, {});


