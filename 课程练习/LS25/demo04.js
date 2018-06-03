// window.onload = function (e) {
//     var div1 = document.getElementById("div1");
//     var div2 = document.getElementById("div2");
// // 冒泡顺序：从具体到不具体  div2 -> div1 -> body -> document
// // 捕获顺序：从不具体到具体  document -> body -> div1 -> div2

// // e.stopPropagation();  阻止事件向上冒泡

//     div1.addEventListener("click",function (e) {
//         console.log("div1 click");
//         e.stopPropagation();
//     },false);//第3个参数可以不写，默认为false

//     div2.addEventListener("click",function (e) {
//         console.log("div2 click");
//     },false);

//     document.addEventListener("click",function (e) {
//         console.log("document click");
//     },false);//若第3个可选参数为true的话会怎样，理解冒泡和捕获的顺序
//     //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式

//     document.body.addEventListener("click",function (e) {
//         console.log("body click");
//     },true);//若第3个可选参数为true的话会怎样，理解冒泡和捕获的顺序
// }
// 如果有如下顺序：它们的布尔值分别为多少   (看阶段图)
// b 1 2 d       t  t  t/f  t
// d b 2 1       t  t   f   f
// b 2 1 d       t  f   f  f
// b 2 1   添加阻止冒泡 如上





//测试3 DOM2级事件处理
// window.onload = function (e) {
//     var div1 = document.getElementById("div1");
//     var div2 = document.getElementById("div2");
//     var eventHandler = function (e) {
//         console.log(e.clientX,e.clientY);
//     }
//     div1.addEventListener("click",eventHandler);
//     // div1.addEventListener("click",eventHandler,false);//第3个参数可选
//     div1.addEventListener("click",function(){
//         console.log("xx");
//     });//思考：是覆盖还是两个语句都会输出？   两个语句都输出

//     div2.addEventListener("click",eventHandler);
//     //div2.addEventListener("click",eventHandler,false);
//     //div2.removeEventListener("click",eventHandler);//取消响应

//     //自定义事件、事件分发、事件监听
//     document.addEventListener("MyEvent",function(){console.log("处理自定义事件")});
//     document.dispatchEvent(new Event("MyEvent"));
// }



//自定义事件（创建、分发、捕获的综合案例）
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        // console.log(e.target);
        // console.log(this);
        var myEvent = new Event("MyEvent");
        // div2.dispatchEvent(myEvent);//若改我div1分发的话会怎样
        div1.dispatchEvent(myEvent);

    }
    div1.onclick = eventHandler;

    div2.addEventListener("MyEvent",function (e) {
        console.log("div2 listener",e.type);
    },false);//改为true

    document.addEventListener("MyEvent",function (e) {
        console.log("document handler");
    },true);//若第3个可选参数为true的话会怎样，那个会输出，理解冒泡和捕获
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式

    document.body.addEventListener("MyEvent",function (e) {
        console.log("body handler");
    },true);//若第3个可选参数为true的话会怎样，那个会输出，理解冒泡和捕获
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式
}
