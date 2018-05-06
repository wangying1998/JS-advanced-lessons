/* 稀疏数组
    - 稀疏数组是包含从0开始的不连续索引的数组，length值大于实际定义的元素的个数
    - 遍历稀疏数组时，注意的跳过无元素项的问题
*/
var a1 = [,"abc"];
console.log(a1.length); // 2

for(var i in a1){
    console.log(i,a1[i]);// 1 abc
}
console.log(0 in a1,1 in a1);// false true

var a2 = new Array(3);
console.log(a2.length);// 3
console.log(a2);// [empty × 3]

//注意：
var a3 = [,,];
console.log(a3.length); // 2

console.log(["a","b"].length); // 2
console.log(["a","b",].length); // 2
console.log(["a","b",,].length); // 3 最后一个逗号之后若没有元素，不算数？

// 多维数组（举行数组、交错数组）

// 多维数组 实例一 矩形数组和交错数组
var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(5);
    //若是table[i] = new Array(i);
}

for(var row=0;row<table.length;row++){
    for(var col=0;col<table[row].length;col++){
        table[row][col]=row*col;
    }
}
var product = table[2][4];
console.log(table);
/*
(5) [Array(5), Array(5), Array(5), Array(5), Array(5)]
0:(5) [0, 0, 0, 0, 0]
1:(5) [0, 1, 2, 3, 4]
2:(5) [0, 2, 4, 6, 8]
3:(5) [0, 3, 6, 9, 12]
4:(5) [0, 4, 8, 12, 16]
*/


var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(i);
}

for(var row=0;row<table.length;row++){
    for(var col=0;col<table[row].length;col++){
        table[row][col]=row*col;
    }
}
var product = table[2][4];
console.log(table);
/*
(5) [Array(0), Array(1), Array(2), Array(3), Array(4)]
0:[]
1:[0]
2:(2) [0, 2]
3:(3) [0, 3, 6]
4:(4) [0, 4, 8, 12]
*/


// 合并一起的写法
var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(5);//若是table[i] = new Array(i);
    for(var col=0;col<table[i].length;col++){
        table[i][col]=i*col;
    }
}
var product = table[2][4];
console.log(table);