// 通过IIFE对变量存储的改变（避免变量共享错误）
// 例、下例中 i 被共享
function f(){
    var getNumFuncs = [];//函数数组
    var j;
    for(var i=0;i<10;i++){
        j = i;
        getNumFuncs[i] = function(){
            return j;      // 如果是return i;  则结果都是10
        };
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();   // 9
// 由于变量i被共享 所有的i都指向同一个i，tmp[0]() ~ tmp[9]()  结果都是9


// 用立即执行表达式解决,创建10个独立作用域
function f(){
    var getNumFuncs = [];//函数数组
    for(var i=0;i<10;i++){
        (function (j) {
            getNumFuncs[j] = function(){return j;};
        })(i);
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();   // 3




