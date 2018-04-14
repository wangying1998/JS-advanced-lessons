function f1(){
    var n = 999;
    function f2(){
        console.log(++n);
    }
    return f2;
}
var f = f1();
f();//输出多少？  1000
f();//输出多少？  1001


var n = 10;
function f1(){
    var n=999;
    nAdd=function(){n+=1;};
    function f2(){
        console.log(n);
    }
    return f2;
}
var result=f1();
result(); // 999
nAdd();
result(); // 1000


//闭包 应用案例 实现数据的封装 私有属性
function Person(){
    var name = "default";
    return {
        getName : function(){
            return name;
        },
        setName : function(newName){
            name = newName;
        }
    }
};
var john = Person();
console.log(john.getName());  // default
john.setName("john");
console.log(john.getName());  // john

var jack = Person();
console.log(jack.getName());  // default
jack.setName("jack");
console.log(jack.getName());  // jack

/////
var m = 10;
function f1(){
    nAdd=function(){++m;};
    function f2(){
        console.log(m);
    }
    return f2;
}
var result1=f1();
var result2=f1();
document.onclick = result1; // 11
nAdd();
result2(); // 11


//////
var m = 10;
function f1(){
    nAdd=function(){++m;};
    function f2(){
        console.log(m);
    }
    return f2;
}
var result1=f1();
var result2=f1();
result1(); // 10
nAdd();
result2(); // 11
result1(); // 11






