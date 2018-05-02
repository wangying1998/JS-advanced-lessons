// JS继承补充
/* 静态方法与原型方法的区别
    静态方法是构造器函数对象（类）的属性，原型方法是实例化对象（对象）的原型的属性
*/

//静态方法实例与原型方法实例
var BaseClass = function() {};
BaseClass.prototype.f2 = function () {
    console.log("This is a prototype method ");
};
BaseClass.f1 = function(){//定义静态方法
    console.log("This is a static method ");
};
BaseClass.f1();//This is a static method
var instance1 = new BaseClass();
instance1.f2();//This is a prototype method


//思考下述案例 实例方法 原型方法
var BaseClass = function() {};
BaseClass.prototype.method1 = function(){
    console.log("1 This is a method in Base.prototype");
};
var instance1 = new BaseClass();
instance1.method1(); // 1 This is a method in Base.prototype

instance1.method1 = function(){
    console.log("2 This is a method in instance1");
};
instance1.method1();// 2 This is a method in instance1



/* 再谈对象原型的constructor属性
    - 因为对象实例从原型中继承了constructor，所以可以通过constructor得到实例的构造函数
    - 确定对象的构造函数名、创建相似对象、constructor可用于指定构造函数
*/

//Part 1 constructor属性的应用

// 1 确定对象的构造函数名
function Foo() {}
var f = new Foo();
console.log(f.constructor.name);  // Foo

// 2 创建相似对象
function Constr(name) {
    this.name = name;
}
var x = new Constr("Jack");
var y = new x.constructor("Mike");  // x.constructor就是Constr
console.log(y);  // Constr {name: "Mike"}
console.log(y instanceof Constr);  // true

// 3 constructor可用于指定构造函数
function Person(area){
    this.type = 'person';
    this.area = area;
}
Person.prototype.sayArea = function(){
    console.log(this.area);
};
var Father = function(age){
    this.age = age;
};
Father.prototype = new Person('Beijin');
console.log(Person.prototype.constructor); //function person()
console.log(Father.prototype.constructor); //function person()
Father.prototype.constructor = Father;     //修正constructor指向
console.log(Father.prototype.constructor); //function father()
var one = new Father(25);


//Part2 公有属性、私有属性、特权方法
function A(id) {
    this.publicId = id;
    var privateId = 456;
    this.getId = function () {
        console.log(this.publicId,privateId);
    };
}
var a = new A(123);
console.log(a.publicId);  // 123
// console.log(a.privateId);
a.getId();  // 123 456



function Person(name){
	this.name = name;
}
Person.prototype.getName = function(){}
// Person.prototype = { //测试如果更改了Person.prototype输出又会变成什么?
// 	getName:function(){}
// }
var p = new Person("jack");
console.log(p.__proto__ === Person.prototype);//true
console.log(p.__proto__ === p.constructor.prototype);//true
console.log(Object.prototype === p.constructor.prototype);//false
console.log(({getName:function(){}}).__proto__ === p.constructor.prototype);//false





