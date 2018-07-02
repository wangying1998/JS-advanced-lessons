// 案例1
var myFirstPromise = new Promise(function(resolve, reject){
    //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
    //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
    console.log("step1");
    setTimeout(function(){
        resolve("成功!"); // 思考：如果改为 reject("失败");
    }, 2500);
    //简写的方式  setTimeout(resolve,2500,"成功!");//等效于上面3行
    console.log("step2");
});

myFirstPromise.then(function(successMessage){
    //successMessage的值是上面调用resolve(...)方法传入的值.
    console.log("Yes! " + successMessage);
},function(errorMessage){
	console.log("No! " + errorMessage);
});



//
var myFirstPromise = new Promise(function(resolve, reject){
    console.log("step1");
        resolve("成功!");
    console.log("step2");
});

myFirstPromise.then(function(successMessage){
    console.log("Yes! " + successMessage);
},function(errorMessage){
	console.log("No! " + errorMessage);
});
// 执行时有顺序队列，执行顺序一定,then是异步的，所以输出是：step1  step2  YES！成功

//
var myFirstPromise = new Promise(function(resolve, reject){
    console.log("step1");
        resolve("成功!");
    console.log("step2");
});
myFirstPromise.then(function(successMessage){
    console.log("step3" + successMessage);
});
console.log('step4');
// step1   step2   step4   step3 成功！


//Promise 案例二
var promise = new Promise(function (resolve, reject) {
    console.log("创建Promise对象时，执行器会立即执行");
    var a = "xxx";
    setTimeout(() => { 
        if (a == "abc") {
            resolve(a);
        } else {
            reject(new Error("error"));
        }
    }, 2000);//2秒后执行（异步执行）
    a = "abc";//试试改为 a = "yyy";
});
promise.then(function (val) { //切换到fulfilled状态后调用，接收resolve的参数
    console.log(val);
}, function (err) { //切换到rejected状态后调用，接收reject的参数
    console.log(err);
});

// 案例三
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');//注意：一旦状态改变，就不会再变状态就凝固了，不会再变了
        setTimeout(reject, ms+500, 'failed');//思考：会转换为reject状态么
    });
}

timeout(1000).then(
(value) => {
    console.log(value);
},
(err)=>{ //思考：此行是否会被调用  不会执行，状态改变之后不会再改变
    console.log(err);
});

//补充案例
// var p = new Promise((a,b)=>{
new Promise((a,b)=>{
	setTimeout(a,1000,"x");//setTimeout(b,1000,"x");
}).then(                             // .then()会返回一个promise对象  此时是返回的旧的对象
	(v)=>{console.log("v1:",v)},
	(e)=>{console.log("e1:",e)}
).then(                              //没有传参数  故是undefined
	(v)=>{console.log("v2:",v)},
	(e)=>{console.log("e2:",e)}
)
// v1: x   v2: undefined


// 
new Promise((a,b)=>{
	setTimeout(a,1000,"x");//setTimeout(b,1000,"x");
}).then(                   // 此时是返回的是新的promise对象
	(v)=>{return new Promise((c,d) => { c('y');})},
	(e)=>{console.log("e1:",e)}
).then(                    // v2接收的参数是y
	(v)=>{console.log("v2:",v)},
	(e)=>{console.log("e2:",e)}
)
// v2:y

