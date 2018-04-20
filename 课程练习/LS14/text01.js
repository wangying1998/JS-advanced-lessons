/* 对象 数据属性 的特性
    - 属性的值（[[value]]），对应属性的值
    - 可写特性（[[writable]]），确定属性是否可写性
    - 可配置特性（[[configurable]]），确定属性是否能删除和其他特性是否可配置
    - 可枚举特性（[[enumerable]]），属性是否可枚举
*/
// 设置属性的特性（definrProperty方法）

//修改obj属性的特性
var obj = {
    x:1,
    y:2
};
//Object.defineProperty(obj,"x",{writable:false,value:11,enumerable:false,configurable:true});
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}
/*  x的可枚举属性为false 不可枚举
    y:2
*/

//
var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,//改成true会如何
    configurable:false,//改成true会如何
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//输出 Jack
person.name = "Lucy";    // writable 为false 不可写
console.log(person.name);//输出 Jack
delete person.name;      // configurable 为false 不允许删除
console.log(person.name);//输出 Jack






