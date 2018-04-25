// 基于构造函数实现的原型继承
/*
 * 通过构造函数来创建对象
 * - 当一个函数与new结合，该函数将作为构造函数来使用，用来创建JS对象
 * - JS（ES5）中没有其他语言（C++、Java）中的类，JS中通过构造函数来实现类的功能
 * - 在JS中构造函数也是对象，有一个重要的属性（原型 prototype），该属性与继承相关
 */

function Person(age,name) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person(20,"Jack");
console.log(p1.name);// Jack
console.log(p1.age); // 20
p1.sayHi();  // Hi,i'm Jack


/* 
- 构造函数有一个重要属性（原型 prototype），该属性就是实例化出来的对象的原型
- 构造函数的这个属性（原型 prototype）是真实对象，实例化的对象通过它实现属性继承
*/

function Person(name) {
    this.name = name;
    this.age = 21;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm ",this.name,this.age,"years old!");
};

var p1 = new Person("Mike");
console.log(p1.name);  // Mike
console.log(p1.age);  // 21
p1.sayHi();  // Hi,i'm  Mike 21 years old!
//name和age属性是定义在p1上
//sayHi方法是是定义在p1的原型上


//没有私有属性情况下，常将方法添加到构造函数的prototype属性上，实现方法共享
//而属性根据情况来确定是定义在构造函数中,还是定义在构造函数的prototype（即实例化对象的原型上）属性上

//可通过实例化出来的对象的__proto__属性来确认原型
//- 实例化的这个对象，有一个属性__proto__指向原型
//- 通过判断得知实例化出来的对象的__proto__就是构造函数的prototype属性

console.log(p1.__proto__ === Person.prototype);  // true




