/*函数对象
  - JS中每个函数都作为对象来维护和运行，即函数对象（既有属性也有方法）
  - 可以将函数赋值给一个变量，或将函数作为参数进行传递
  - 函数对象对应的类型是Function
  - 如果变量是函数，typeof此函数，返回function
  - 内置函数对象（Array、Function、Date等），内置的非函数对象（Math，JSON）
 */
function foo(){}

console.log(foo); // function foo(){}
console.log(typeof foo); // function
console.log(foo instanceof Object); // true
console.log(foo instanceof Function); // true
console.log(foo === window.foo); // true

//如果变量是函数，typeof此函数，返回function
console.log(typeof Function);// function
console.log(typeof Array);	 // function
console.log(typeof Date);	 // function
console.log(typeof Error); 	 // function
console.log(typeof Math);	 // object
console.log(typeof JSON);	 // object


//
console.log(typeof new Function());  // function
console.log(typeof new Array());  // object
console.log(typeof new Date());  // object


console.log(Function instanceof Function);  // true
console.log(Function instanceof Object);  // true

console.log(Array instanceof Function);  // true
console.log(Array instanceof Object);  // true

console.log(Date instanceof Function);  // true
console.log(Date instanceof Object);  // true

console.log(Math instanceof Function);  // false
console.log(Math instanceof Object);  // true

console.log(JSON instanceof Function);  // false
console.log(JSON instanceof Object);  // true
