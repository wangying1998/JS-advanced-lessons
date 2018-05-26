window.onload = function(e){
    // console.log(e.target);
    // console.log(this);
    var div1 = document.getElementById("div1");
    // var eventHandler = function (e) {
    //     // console.log(e.target);
    //     // console.log(this);
    //     var myEvent = new Event("MyEvent");
    //     // div2.dispatchEvent(myEvent);//若改我div1分发的话会怎样
    //     div1.dispatchEvent(myEvent);
    // }
    // div1.onclick = eventHandler;

    
    // div2.addEventListener("MyEvent",function (e) {
    //     console.log("div2 listener",e.type);
    // },false);//改为true

    // document.addEventListener("MyEvent",function (e) {
    //     console.log("document handler");
    // },true);//若第3个可选参数为true的话会怎样，那个会输出，理解冒泡和捕获
    // //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式

    document.body.addEventListener("MyEvent",function (e) {
        console.log("body handler");
    },true);//若第3个可选参数为true的话会怎样，那个会输出，理解冒泡和捕获
    //第3个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式


    // div1.onclick = function(e){




        
        // console.log(e.clientX,e.clientY,e.ctrlKey);
        // console.log(window);
        // console.log(e.type,e.target);

        // console.log(this,e.target);
        // for(var k in e){
        //     console.log(k);
        // }

        // for(var k in e.__proto__){
        //     console.log(k);
        // }

        // for(var k in e.__proto__.__proto__){
        //     console.log(k);
        // }

        // for(var k in e.__proto__.__proto__.__proto__){
        //     console.log(k);
        // }

        // console.log(e.__proto__);
        // console.log(e.__proto__.__proto__);
        // console.log(e.__proto__.__proto__.__proto__);
        // console.log(e.__proto__.__proto__.__proto__.__proto__);
        // console.log(e.__proto__.__proto__.__proto__.__proto__.__proto__);

        // console.log(e);
        // console.log(e.hasOwnProperty('target'));
        // console.log(e.__proto__.hasOwnProperty('target'));
        // console.log(e.__proto__.__proto__.hasOwnProperty('target'));
        // console.log(e.__proto__.__proto__.__proto__.hasOwnProperty('target'));

        

    // };

    


    // 拖动事件
    // div1.ondrag = function(){
    //     console.log('div1 onclick');
    // };
}