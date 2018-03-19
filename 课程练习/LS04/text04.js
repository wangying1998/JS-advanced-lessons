//switch详解
/*
switch中的case
    - case在比较时使用的是全等操作符===比较，因此不会发生隐式类型转换
    - case后可以使一个表达式
*/

var i = "1";
switch(i){
    case 1:
        console.log('case 1 number');
        break;
    default:
        console.log('输出 default');
}
// 输出 default
// switch后括号里与case比较是全等操作符

var i = 65;
switch(true){
    case i>=60:
        console.log('及格');
        break;
    case i<60:
        console.log('不及格');
        break;
    default:
        console.log('default');
}
// 及格

var i = 65;
switch(new Boolen(true)){
    case i>=60:
        console.log('及格');
        break;
    case i<60:
        console.log('不及格');
        break;
    default:
        console.log('default');
}
// default
// 对象与布尔类型的值不全等


// switch贯穿
var i = 1;
switch(i){
    case 1:
        console.log('case 1');
    case 2:
        console.log('case 2');
        break;
    case 3:
        console.log('case 3');
        // break;
    default:
        console.log('case 4');
}
/* 
case 1
case 2
*/
// switch 贯穿:
// 从满足第一个case处开始，直到遇到break为止，
// 若都没有break则直到遇到default结束为止

//遍历
// for....in 常用来遍历对象  遍历数组（忽略空缺）





