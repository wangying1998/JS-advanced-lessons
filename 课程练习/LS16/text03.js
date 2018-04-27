// 构造函数中的this
// 指代用过 new 新创建的对象
// 构造函数如果不用new去创建对象，和普通函数一样

function Point(x,y) {
    this.x = x;
    this.y = y;
}
var p = new Point(2,3);
console.log(p); // Point {x:2,y:3}

// 如果直接调用
Point(5,6);//结果是 为window添加了两个属性并赋值
console.log(window.x,window.y);   // 5,6




