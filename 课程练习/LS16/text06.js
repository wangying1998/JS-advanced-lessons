var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log(obj.fun3());//输出 fun2 函数对象
console.log(obj.fun3()());
//输出 undefined  由于fun3 = fun1 调用时有嵌套，this指向window，window.x是未定义
console.log(obj.fun4());//输出 23  此处没有嵌套