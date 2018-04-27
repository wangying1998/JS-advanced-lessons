/* JS中this简介及特点
在JavaScript中，this是动态绑定，或称为运行期绑定的。因此，JS中this含义丰富，
它可以是全局对象、当前对象或者任意对象，这完全取决于函数的调用方式
*/
// 注：this不进行作用域传递



// JS中的this有四种应用场景：一般函数中的this  对象方法中的this  构造函数中的this  间接调用中的this
// 注：不管哪种场景，this指向的都是调用该函数的主体

// 一般函数

function thisTest(){
    console.log(this === window);  // 非严格模式下 指向window  true
    // 严格模式下 this指向undefined
}
thisTest();

// 可以通过this在函数内添加、删除、修改全局对象
var a = 10,  b = "Hi";   // 这一行处是逗号
function thisTest2(){
    this.a = 20;
    delete this.b;
    this.c = "新添加属性";
}
thisTest2();
console.log(a,b,c);  // 20 "Hi" "新添加属性"

// 为什么删除了b还可以访问到？
Object.getOwnPropertyDescriptor(window,'b');
// {value: "Hi", writable: true, enumerable: true, 
//   configurable: false}    可配置属性为false 删除b静默失败




// 注*********************
var a = 10;
b = 'hi';
Object.getOwnPropertyDescriptor(window,'a');
// {value: 10, writable: true, enumerable: true,
//  configurable: false}    var定义的全局变量  默认可配置属性为false
Object.getOwnPropertyDescriptor(window,'b');
// {value: "hi", writable: true, enumerable: true,
//  configurable: true}     不用var定义的  默认可配置属性是true



// 因此
var a = 10;   b = "Hi";   // 注意这一行的分号与上边不同
function thisTest2(){
    this.a = 20;
    delete this.b;
    this.c = "新添加属性";
}
thisTest2();
console.log(a,b,c);   // 此处访问不到b 以及被删除  会报错









