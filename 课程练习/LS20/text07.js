// 正则表达式对象的属性
/*
    - global 默认为false
    - ignore case 默认为false
    - multiline 默认为false
    - lastIndex 表示当前匹配内容的最后一个字符的下一个位置
    - sourse 正则表达式文本字符串
*/
var reg1 = /\w/;
var reg2 = /\w/gi;
console.log(reg1.global,reg1.ignoreCase,reg1.multiline,reg1.lastIndex,reg1.source);// false false false 0 "\w"
console.log(reg2.global,reg2.ignoreCase,reg2.multiline,reg2.lastIndex,reg2.source);// true true false 0 "\w"

console.log(reg2.lastIndex);  // 0
reg2.test("abc23def");
console.log(reg2.lastIndex);  // 1
reg2.test("abc23def");
console.log(reg2.lastIndex);  // 2

// 原型方法 test  exec
while (reg2.test("abc23def")){
    console.log(reg2.lastIndex);  // 1-8
}

// exec  获得详细信息
var reg3 = /\w/gi;
var str = "slfls3r3sfsf";
var returnArray1 = reg3.exec(str);
console.log(reg3.lastIndex,returnArray1);

var returnArray2 = reg3.exec(str);
console.log(reg3.lastIndex,returnArray2);
/*
var returnArray3;
while (returnArray3 = reg3.exec(str)){
    console.log(reg3.lastIndex,returnArray3);
}
*/

//RegExp静态属性
console.log(RegExp.$_);
console.log(RegExp.lastMatch);