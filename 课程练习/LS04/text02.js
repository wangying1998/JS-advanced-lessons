//表达式及其分类
//1. 不同类型的表达式
23;//其中的23为原始表达式
obj = {x:2};// ={x:2}为对象初始化表达式
arr = [1,2];// =[1,2]为数组初始化表达式
var foo = function(){ // = function(){}为函数定义表达式
    console.log("foo");
};
obj.x;//obj.x为属性访问表达式
foo();//foo()为函数调用表达式
2+3;//2+3为算数运算表达式
2>3;//2>3为关系运算表达式
1&&2;//1&&2为逻辑运算表达式


//语句及其分类
2>3;//表达式语句
//条件语句
var a=2,b=3;
if(a>b){
    console.log("a > b");
}else{
    console.log("a < b");
}
//****************************
function foo(){
    var a=b=3;        //相当于 var a=3;  b=3;
                      //     a是局部变量 b是全局变量
}
foo();
console.log("b:",b);//是否报错？输出几？为什么？
// 不报错  输出3  b是全局变量
console.log("a:",a);//是否报错？
// 报错 因为a是局部变量 外部无法访问

//*****************************

//循环语句
for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out for ",i);



//****************************************
//ES5中的块(ES5中没有块作用域，所以带来了很多问题，外部可以访问)
{
    var a = 20;
}
console.log(a);   //外部可以访问到a
//
if(true){
    var a = 20;
}
console.log(a);
//
if(false){
    var b = 20;
}
console.log(b);
//
for(var i = 0;i<5;i++){
    console.log("in for ",i);  // 1 2 3 4 
}
console.log("out of for ",i);  // 5


