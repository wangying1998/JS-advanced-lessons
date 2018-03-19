//JS逻辑运算符进阶
// 1. && 与 || 的理解与应用
    // 两侧都是布尔类型
    console.log(2>1&&4<5);   // true
    console.log(true&&(!2));   // false
    console.log(false&&("2" == 2));   // false
    console.log(false&&false);   // false

    console.log(2>1||4<5);   // true
    console.log(true||(!2));   // true
    console.log(false||("2" == 2));   // true
    console.log(false||false);   // false

// 2. 深层次理解
    // （非布尔类型）
    /*
        当 && 和 || 两侧的操作数不是布尔类型时，
        首先，将做操作数转换成布尔类型
        其次，对转换后的做操作数进行逻辑判断（真假）
        根据短路原则返回

        短路原则：（忽略对右操作数的判断）
            &&  若转换后的左操作数为真，直接返回 原始右操作数
                若为假，直接返回 原始左操作数
            ||  若转换后的左操作数为真，直接返回 原始左操作数
                若为假，直接返回 原始右操作数
    */

console.log(2 && 4);    // 4
console.log(0 && 4);    // 0
console.log({x:2} && {name:"Jame"});    // Object {name:Jame}
console.log(null && "hello");    // null
console.log({} && "world");    // world


console.log(2||4);    // 2
console.log(0||4);    // 4
console.log({x:2}||{name:"Jame"});    // Object {x:2}
console.log(null||"hello");    // hello
console.log({}||"world");    // Object {}

// 3. &&和||在实际中的应用
    // 短路特性，可用来实现条件语句
    var score = 76;
    if(score>90){
        console.log("优");
    }else if(score>75){
        console.log("良");
    }else if(score>60){
        console.log("及格");
    }else{
        console.log("不及格");
    }

        //通过&&和||的组合实现如上功能
    console.log((score>90&&"优")||(score>75&&"良")||(score>60&&"及格")||"不及格");

    // 使用||来设置函数参数的默认值
    var sum = function(a,b,c){
        b = b||4;
        c = c||5;
        return a+b+c;
    };
    console.log(sum(1,2,3));    // 6
    console.log(sum(1,2));    // 8
    console.log(sum(1));    // 10
    // console.log(sum(1,0,0));    // 本应是1  但是有bug输出10
    
    //优化改造版本
    var sum = function(a,b,c){
        if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
        if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
        return a+b+c;
    };
    console.log(sum(1,2,3));    // 6
    console.log(sum(1,2));    // 8
    console.log(sum(1));    // 10
    console.log(sum(1,0,0));    // 1  正确




