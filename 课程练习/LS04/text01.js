//JS语法、表达式及语句综述
//字面量：对象字面量、数组字面量

//标识符与保留字
// - 标识符用来给变量或函数进行命名，以字母、下划线或$为开头
// - 保留字：arguments  break  case  catch  class  const等

arguments  //如果传递参数时，实际参数比形参数目多，可以用来获取多余的参数
function fun(a){
    console.log(a);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
fun(1,2,3);  // 输出 1  2  3

//表达式(expression)与语句(statement)
//表达式是要产生一个值  语句表示了一种行为
var o = {x:1,y:2};  // 语句
a>b;   // 表达式

//************************************************

//存在有二义性的语句，要避免有二义性的语句
var max = function (x,y) {
    return x>y?x:y;
};
// 下述代码是对象还是语句块
{
    foo:max(2,3)
}

// 存在二义性的语句 补充一  看做对象可以正常执行
var max = function (x,y) {
    return x>y?x:y;
};
var x = {
    foo:max(2,3)
}

// 存在二义性的语句 补充二  看做语句块也可以正常执行
var max = function (x,y) {
    return x>y?x:y;
};
{
    console.log(123);
    console.log(456);
    foo:max(2,3)
}















