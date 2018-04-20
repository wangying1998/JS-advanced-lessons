/* 对象访问器属性的特性
    - 可配置特性（[[configurable]]），确定属性是否能删除和其他特性是否可配置
    - 可枚举特性（[[enumerable]]），属性是否可枚举
    - 读取属性特性（[[get]]），在读取属性时调用的函数，默认是undefined
    - 写入属性特性（[[Set]]），在写入属性时调用的函数，默认是undefined
*/

//通过Object.defineProperty来添加和改变的get /set的属性特性
//添加访问器
var obj1={
    _name:"Lucy"
};
Object.defineProperty(obj1,"name",{
    get:function (){//只定义了get 特性，因此只能读不能写
        return this._name;
    }
});
console.log(obj1.name);//"Lucy"
obj1.name="jack";//只定义了getter访问器，因此写入失效
console.log(obj1.name);//"Lucy"


//改变访问器属性特性 注意添加访问器和修改访问器特性的写法的区别
var obj2={
    _name:"Lucy",
    set name(val){this._name = val;},
    get name(){return this._name;}
};
Object.defineProperty(obj2,"name",{
    get:function (){
        return this._name+"_hihi";
    },
    set:function (val) {
        this._name = val+"_haha";
    }
});
console.log(obj2.name);// Lucy_hihi
obj2.name="jack";
console.log(obj2.name);// jack_haha_hihi




var person = {_name:"Jack"};
Object.defineProperty(person,"name",{
    configurable:false,//若为true会如何
    enumerable:true,
    set:function(val){this._name = val},
    get:function(){return this._name}
});
console.log(person.name);  // jack
person.name = "Lucy";
console.log(person.name);  // Lucy
delete person.name;  // configurable为false 不可删除
console.log(person.name);  // Lucy


