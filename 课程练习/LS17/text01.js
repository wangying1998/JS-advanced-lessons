// JS  对象-对象  原型继承
/*
    JavaScript的原型继承是对象-对象的继承
    - 每个对象都有一个原型对象（可动态的指定原型，来改变继承关系，最原始的原型是null）
    - 三种方式创建的对象的原型
    - 多个对象继承于一个原型时，存在原型共享（节省内存如共享方法，但也带来了共享问题）
*/

//通过Object.create静态方法创建的对象的原型共享问题
var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x = 5;//若此行写为subObj_First.x = 5;下一行的结果是1
console.log(subObj_Second.x);  // 5


//通过构造函数创建的对象的原型共享问题
//以下写法实现了原型继承，但存在原型共享的问题
function Person(name){
    this.name = name;
}
Person.prototype.age = 22;
Person.prototype.showName = function(){console.log(this.name);};
function Student(id){
    this.id = id;
}
//var p1 = new Person("Mike");Student.prototype = p1;
Student.prototype = new Person("Mike");
var s1 = new Student(2017001);
var s2 = new Student(2017002);

console.log(s1.name,s1.age,s1.id);  // Mike 22 2017001
console.log(s2.name,s2.age,s2.id);  // Mike 22 2017002
s1.__proto__.name = "Jack";
console.log(s2.name);  //Jack
s2.__proto__.__proto__.age = 99;
console.log(s2.age);  //99

// console.log(s1);
// console.log(s1.__proto__);
// console.log(s1.__proto__.__proto__);