// JS原型继承
/*JS语言继承方式
 * - JavaScript采用的是原型的继承方式，每个对象都有一个原型对象，最原始的原型是null
 * - JavaScript的继承是对象-对象的原型继承，为面向对象提供了动态继承的功能
 * - 任何方式创建的对象都有原型对象，可以通过对象的 __proto__ 属性来访问原型对象
 */

//注：JS对象是通过原型链的方式实现的对象继承
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
//console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);//true

var newObj = Object.create(obj);
var newObj2 = Object.create(obj);//思考：多个对象同一个原型的情况
newObj.age = 23;

console.log(newObj.__proto__ === obj);//true
console.log(newObj2.__proto__ === obj);//true

//JavaScript的继承方式 是对象-对象的继承，对象要实现继承首先要有原型对象
console.log(newObj.__proto__.__proto__);//Object.prototype
console.log(newObj.__proto__.__proto__.__proto__);//null







