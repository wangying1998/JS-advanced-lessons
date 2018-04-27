// JS this的缺陷和解决方法

// this不进行作用域传递，函数嵌套中的this存在缺陷

// Part1 方法中函数嵌套 this缺陷
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        function moveToX() {
            this.x = x;//this绑定到了window
        }
        //内部嵌套函数
        function moveToY() {
            this.y = y;//this绑定到了window
        }
        moveToX();//moveToX.call(this);通过间接调用来解决
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);    // {x: 0, y: 0, moveTo: ƒ}

//console.log(window.x,window.y);    // 2  2   为window添加了属性





// Part2 方法中函数嵌套 this缺陷 解决办法
// 解决方案一：软绑定
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var that = this;//关键的一行，软绑定
        //内部嵌套函数
        function moveToX() {
            that.x = x;//this改为that
        }
        //内部嵌套函数
        function moveToY() {
            that.y = y;//this绑定到了对象
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//console.log(window.x,window.y);


//解决方案二：通过call和apply来解决
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;
        }
        function moveToY() {
            this.y = y;
        }
        moveToX.call(this);//->this.moveToX()->point.MoveToX()
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);//2,0


//
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX(x) {
            this.x = x;
        }
        function moveToY(y) {
            this.y = y;
        }
        moveToX.call(this,x);  // moveToX.call(this)(x);
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);//2,0


//解决方案三：通过bind来解决
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX(x) {
            this.x = x;
        }
        function moveToY(y) {
            this.y = y;
        }
        moveToX.bind(point)(x);  // moveToX.bind(this)();
        moveToY.bind(point)(y);  // moveToY.bind(this)();
    }
};
point.moveTo(2,2);
console.log(point);  // 2,2






// Part1 构造函数中函数嵌套 this缺陷
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        function moveX(x) {
            this.x+=x;
        }
        function moveY(y) {
            this.y+=y;
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);//输出为Point{x:2,y:3}没有移动



// Part2 构造函数中函数嵌套 this缺陷 解决方案
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        var that = this;//此处that为实例化出来的p对象
        function moveX(x) {
            that.x+=x;//this改为that
        }
        function moveY(y) {
            that.y+=y;//this改为that
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);//输出为Point{x:3,y:4}，移动了(1,1)
