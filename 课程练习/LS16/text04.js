// 间接调用中的this(call  apply)
// 通过call/apply间接调用的函数中的this，指代第一个参数

//call 实例1
objA = {name:"AA",x:1};
objB = {name:"BB",x:5};
objA.test = function () {
    console.log(this.name,this.x);
};

objA.test();   //AA 1
objA.test.call(objB);   //BB 5

//call 实例2
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"QL"
};
bird.fly(5,6);
bird.fly.call(me,7,8);
// bird.fly.apply(me,[7,8]);





