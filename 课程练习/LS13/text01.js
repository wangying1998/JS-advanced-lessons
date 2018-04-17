// JS对象
/*
    - JS对象是一种复合值：将很多值复合在一起（包括原始类型值、对象、函数）
    - JS对象是若干无序属性的集合，可以直接通过属性名来访问对象的属性（键值对）
    - 函数作为某一个对象的属性时，称其为该对象的方法
*/
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        console.log(this.str);
    }
};
console.log(obj.num);// 10
console.log(obj.str);// Hi
obj.show();			 // Hi

//JS对象的分类：内置对象 宿主对象 自定义对象
// 标准内置对象：构造器函数对象  非构造器对象   -------注意

// typeof
console.log(typeof Array);    // Function
console.log(typeof Function);    // Function
console.log(typeof Date);    // Function
console.log(typeof Number);    // Function
console.log(typeof String);    // Function
console.log(typeof Boolean);    // Function
console.log(typeof Math);    // Object
console.log(typeof JSON);    // Object


// instanceof  是否是构造器函数对象
console.log(Object instanceof Function);    // true
console.log(Object instanceof Object);    // true
console.log(Boolean instanceof Function);    // true
console.log(Boolean instanceof Object);    // true
console.log(String instanceof Function);    // true
console.log(String instanceof Object);    // true
console.log(Number instanceof Function);    // true
console.log(Number instanceof Object);    // true
console.log(Function instanceof Function);    // true
console.log(Function instanceof Object);    // true
console.log(Array instanceof Function);    // true
console.log(Array instanceof Object);    // true
console.log(Date instanceof Function);    // true
console.log(Date instanceof Object);    // true
console.log(Math instanceof Function);    // false
console.log(Math instanceof Object);    // true
console.log(JSON instanceof Function);    // false
console.log(JSON instanceof Object);    // true





