//Boolean  :  true  false
//Null  Undefined

//Undefined 的几种情况
var a;
console.log(a);//undefined
//注意：分清未定义与未声明的区别 undefined与 undeclare
//没有加var 直接使用a会报错  undefined

function foo(x,y) {
    console.log(x,y); //1 undefined
}
foo(1);

function fee() {
    //没有返回值的情况
    //返回值是undefined
}
var feeReturnValue = fee();
console.log(feeReturnValue);//undefined


//null 需要注意的一点  类型是对象
console.log(typeof null);  //object


