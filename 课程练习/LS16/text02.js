// 对象方法中的this
// 在没有嵌套的情况下，this指代调用此方法的对象
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        this.x = x;
        this.y = y;
    }
};
point.moveTo(1,1);//this绑定到当前对象，即point对象上
console.log(point);
//{x: 1, y: 1, moveTo: ƒ}










