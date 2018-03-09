//1.数据类型：基本(原始)数据类型，引用(对象)数据类型
//  基本数据类型：Number String Boolean Null Undefined
//  引用数据类型：Object(Array,Math,Date,Function....)
//  检测数据类型方法：typeof   instanceof
//      typeof 一般用于检测基本数据类型
//      instanceof 一般用于检测引用数据类型
console.log(typeof 123);      //number
console.log(typeof true);     //boolean
console.log(typeof "abc");    //string

console.log(typeof null);     //object
//null  数据类型是 object
console.log(typeof undefined);     //undefined
console.log(typeof {name:"Mike",age:20});    //object
console.log(typeof function foo(){});    //function

console.log(typeof Array);    //function
console.log(typeof Function);   //function
console.log(typeof Date);    //function
console.log(typeof Number);    //function
console.log(typeof String);    //function
console.log(typeof Boolean);   //function
console.log(typeof Math);    //object
console.log(typeof JSON);    //object

// instanceof用法
//（左侧操作数为对象，右侧操作数为原型链中的一个类型时，返回为true）
console.log(Array instanceof Object);    //true
console.log(Array instanceof Function);    //true
console.log(Math instanceof Function);    //false
console.log(Math instanceof Object);    //true
console.log(Function instanceof Object);    //true
console.log(Date instanceof Function);    //true
console.log(Date instanceof Object);    //true
console.log(String instanceof Function);    //true
console.log(String instanceof Object);    //true
console.log(JSON instanceof Function);    //false
console.log(Math instanceof Object);    //true

var a = [1,2,3];
console.log(a instanceof Array);    //true

var fun = function(){}
var f1 = new fun();
console.log(f1 instanceof fun);    //true

//2.基本类型与引用类型的区别
/*  ·内存分配方式不同：堆区与栈区，存值与存地址，影响变量的生命周期*/
//      函数内定义的基本数据类型的临时变量分配在栈区
//      引用数据类型的引用定义在栈区，真正的对象被分配在堆区

function fun(){
    var n = 10;    //栈区
    var m = true;    //栈区
    var str = "Hello World!";    //栈区

    var obj = {value:"Hello World!"};
    //obj的引用存在栈区，{value:"Hello World!"}存在堆区
};
fun();

var a = 10;  //a 在 window 下，全局区


/*  ·赋值时不同  赋值与赋引用，深拷贝与浅拷贝*/

function fun(){
    var str1 = "a";  //str1存在栈区
    var str2 = str1;  //赋值
    str2 = "b";  //str2也存在栈区 且是两块内存 两处的值不会干扰
    console.log(str1,str2);// a  b

    var obj1 = {v:"a"};  //obj1存在栈区的是引用，指向堆区内存
    var obj2 = obj1;  //此处是赋的引用 即obj1和obj2指向同一块内存
    obj2.v = "b";  //此处修改obj2的属性即修改obj1的属性，故obj1.v也是b
    console.log(obj1,obj2);// {v:"b"}  {v:"b}"

    obj2 = {v:"c"};  //此处obj2重新指向堆区新的内存，堆区内容是{v:"c"}，而obj1指向的仍然是保存{v:"b"}的内存
    console.log(obj1,obj2);// {v:"b"}  {v:"c"}
}
//注：是值赋值还是引用赋值取决于变量的类型，而不是取决于存放在堆区还是栈区

var obj1 = {x1:1,y1:2};  //obj1.x1存放在堆区
var obj2 = {x2:1,y2:2};  //同上

console.log(obj1.x1 == obj2.x2);   //true  此处是值比较
console.log(obj1.x1 === obj2.x2);  //true  此处是值比较
console.log(obj1 === obj2);    //false  此处是引用比较

var fun = function(){   //整个函数的内容都存放在堆区，栈区存放的是引用
    var a = 23;    //此处的a存放在堆区
    console.log(a);
}

//经典案例
//
var a = 123;    //a存放在栈区
function foo1(x){
    x = 345;    //此处x也是一个变量，也存放在栈区，但不是a
}
foo1(a);  //将a代入 实则a值不变 仍然是123
console.log(a);   // 123

//
var a = {y:123};  //引用在栈区，指向堆区的{y:123}
function foo2(x){  //此时 x和a指向堆区的同一块内存
    x.y = 345;  //此处修改x的属性即修改a的属性 故a.y = 345
}
foo2(a);
console.log(a.y);   // 345

//
var a = {y:123};   //引用在栈区，指向堆区的{y:123}
function foo3(x){  //此时 x和a指向堆区的同一块内存
    x.y = 345;     //此处修改x的属性即修改a的属性 故a.y = 345
    x = {y:456};   //此处x 指向堆区的新一块内存{y:456}
}
foo3(a);   //故 a.y是345
console.log(a.y);   // 345

//
var a ={y:123};    //引用在栈区，指向堆区的{y:123}
function foo4(x){  //此时 x和a指向堆区的同一块内存
    x = {y:456};   //此处x指向堆区中新的一块内存{y:456}
    x.y = 345;	   //此处修改的是x.y的值，与a无关
}                  //故 a.y仍然是123
foo4(a);
console.log(a.y);  // 123

/*  ·判等时不同  值类型是判断变量值是否相同，引用类型是判断是否指向同一块内存*/
var a = 10;
var b = 10;
console.log(a == b);  //true  值判等
console.log(a === b); //true  值判等
//
var c = new Number(10);  
var d = new Number(10);  //变量内容存放在堆区 故是引用判等
console.log(c == d);  //false  c和d指向的不是同一块内存 
console.log(c === d); //false  同上
//
var a3 = new Number(200);  //a3指向的内容在堆区
var b3 = a3;    //引用赋值
console.log(a3 == b3);  //true
console.log(a3 === b3);  //true

b3 = new Number(200);  //b3指向新的堆区内容
console.log(a3 === b3);  // false
//
var a4 = new Number(200); //a4指向堆区内容
var b4 = 200;  //b4存放在栈区
console.log(a4 == b4);//true  此处是a4转换成了基本数据类型
console.log(a4 === b4);//false  此处两者类型不同 a4是Object b4是Number
//
var a5 = {x:1,y:2};
var b5 = {x:1,y:2};
console.log(a5 === b5);  //false 两者指向内存不同
console.log(a5.x === a5.x);  //true 两者值相同

//立即执行表达式
(function(){
    //...
}())

/*  ·函数参数传递时的不同  按值传递，按引用传递*/
//值传递
var str_a = "Hello World";
function fn_a(arg){    //
    console.log(arg);  // #1 --> Hello World
    arg = "Hai";    
    console.log(str_a,arg);  // #2 --> Hello World , Hai
};
fn_a(str_a);
console.log(str_a);   // #3 这时候str_a:"Hello World"

//从上面#1处可以看出，传入函数fn_a的是str_a的值
//***并且内存中分配了新的空间来保存函数参数和其值(函数运行后自动释放这部分内存)
//所以在#2处打印的是2个不同的字符串。也正是因为传值时候对str_a值进行了值的复制，而这又是原始类型的值，
//所以在#3处的str_a与早先声明的str_a保持一致

// 引用传递
var obj_a = {value:1};
function fn_a(arg){  //此时arg 和 obj_a指向同一块内存
    arg.value=3;
};
fn_a(obj_a);
console.log(obj_a);// 这时候obj_a是{value:3}

function fn_b(arg){
    arg={value:2};//创建了一个新的对象，arg指向新对象
};
fn_b(obj_a);
console.log(obj_a);// 这时候obj_a是{value:3}

// 上面这个问题也可以从内存角度去理解，两个函数都是传址，而这个址引用了obj_a在内存中对应的对象，
// 所以两个函数中的arg起初都是引用和obj_a同一个内存中的对象值，
// 而fn_a中访问的依旧是和obj_a同一个内存对象，所以fn_a修改是成功的，
// 但是在fn_b中重新为arg赋值新的对象，arg指向新对象并不会影响obj_a