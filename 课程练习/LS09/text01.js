//JS中的预解析
// JS脚本语言，由解析器边解析边执行
/*解析和执行过程
 * 全局预解析阶段（将全局变量和函数声明前置）
 * 全局顺序执行阶段（变量赋值、函数调用等操作）
 * 当遇到函数调用时，在执行函数内代码前，进行函数范围内的解析
 * 当存在函数嵌套时，以此类推，会多次进行函数预解析
 * 
 * 解析和执行是不断交替的
 */
/* 预解析主要工作（将变量声明和函数声明提升）
- 解析器在执行代码前进行代码扫描（var,function）
- 将变量和函数声明在当前作用域（全局、函数）内进行提升
*/



// 变量提升
//
console.log(a);  // undefined
var a = 1;
console.log(a);  // 1
// 等价于 ---------->
var a;
console.log(a);  // undefined
a = 1;
console.log(a);  // 1

//例
console.log(a,b);
var b = 23;
console.log(a,b);
var a = b;
console.log(a,b);
// 等价于 ---------->
var a,b;
console.log(a,b);// undefined undefined
b = 23;
console.log(a,b);// undefined 23
a = b;
console.log(a,b);// 23 23

//引用类型 例
console.log(obj1,obj2);
var obj1 = {x:23};
console.log(obj1,obj2);
var obj2 = obj1;
console.log(obj1,obj2);
obj2.x =25;
console.log(obj1,obj2);

// ------------->
var obj1,obj2;
console.log(obj1,obj2);// undefined undefined
obj1 = {x:23};
console.log(obj1,obj2);// {x:23} undefined
obj2 = obj1;
console.log(obj1,obj2);// {x:23} {x:23}
obj2.x =25;
console.log(obj1,obj2);// {x:25} {x:25}




// 函数声明提升
//1
foo();//f_2
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
// -------------------->等价于
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();  // f_2   函数同名会出现覆盖


//同时有 var 和 function 关键字

//  情形1.函数表达式
//
foo();
var foo = function(){
    console.log("foo");
};
// 当function前有运算符的话，认定为表达式，不提升
// 故上面等价于
var foo;
foo();    // 报错
foo = function(){
    console.log("foo");
};



//
console.log(foo);   // undefined
var foo = function(){
    console.log("foo");
};
foo();  // 不报错  foo
//-------------->等价于
var foo;
console.log(foo);   // undefined
foo = function(){
    console.log("foo");
};
foo();   // foo



// 情形2.变量名同名函数
AA();
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();

// ---------> 等价于
function AA(){
    console.log("AA_1");
}
var AA;

AA();        // AA_1
AA = function AA(){
    console.log("AA_2");
};
AA();        // AA_2












