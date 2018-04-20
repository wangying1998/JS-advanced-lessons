// 属性特性描述符及属性特性补充
/*
 *属性特性描述符是一个用来查看对象属性的对象
 *该对象包含四个属性，对应四个特性，通过getOwnPropertyDiscriptor方法获得 
 */
var obj = {x:5};
Object.defineProperty(obj,"y",{
    configurable:false,
    writable:false,
    enumerable:true,
    value:6
});
Object.defineProperty(obj,"z",{
    configurable:false,
    value:7
});
Object.getOwnPropertyDescriptor(obj,"x");
// {value: 5, writable: true, enumerable: true, configurable: true}

// Object.getOwnPropertyDescriptor(obj,"y");
// {value: 6, writable: false, enumerable: true, configurable: false}

// Object.getOwnPropertyDescriptor(obj,"z");
// {value: 7, writable: false, enumerable: false, configurable: false}


// 给多个属性设置特性的方法（Object.defineProperties）
var obj = {_x:1};
Object.defineProperties(obj,{
    y:{value:2,writable:true,configurable:true,enumerable:true},
    z:{value:2,writable:true,configurable:true,enumerable:true},
    x:{
        get:function(){return this._x;},
        set:function (val) {
            this._x = val;
        }
    }
});



//批量添加属性并设置属性特性 book实例
var book={};
//调用Object.defineProperties(对象名，要添加的属性)方法，为对象一次定义多个属性(1.数据属性)(2.访问器属性)
Object.defineProperties(book,{
//添加的两个数据属性(_year,edition)
    _year:{//(_year)前面的下划线表示只能通过对象方法访问的属性
        value:2004,
        writable:true //如果没写这一行会怎样？  不可写入
    },
    edition:{
        value:1,
        writable:true
    },
//添加了访问器属性(year)
    year:{
//调用get方法读取属性
        get:function(){
            return this._year;
        },
//调用set方法写入属性
        set:function(newValue){
            if (newValue>2004) {
                this._year=newValue;
                this.edition+=newValue-2004;
            }
        }
    }
});
//测试
book.year=2006;    // 2006


// 静态创建对象
var empty = {};
var obj2 = Object.create(empty,{
   x:{value:1}, y:{value:2,enumerable:true}
});
console.log(obj2);  // {y:2,x:1}
console.log(obj2.hasOwnProperty("x"));  // ture

