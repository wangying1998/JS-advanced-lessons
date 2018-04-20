//给对象添加属性方法

// 方式一：直接添加（属性特性默认值都为true）
var obj = {
    x:1,
    y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;
for(var k in obj){
    console.log(k,obj[k]);
}
Object.getOwnPropertyDescriptors(obj);
/*
    x:{value: 1, writable: true, enumerable: true, configurable: true}
    y:{value: 2, writable: true, enumerable: true, configurable: true}
    z:{value: 3, writable: true, enumerable: true, configurable: true}
*/


// 方式二：通过defineProperty方法添加（属性特性默认都为false）
var obj = {
    x:1,
    y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;

//通过Object.defineProperty方法添加的属性，除了手动修改，其所有特性默认都是false
Object.defineProperty(obj,"w",{value:456,configurable:true});//writable,enumerable没有指定，所以默认为false
for(var k in obj){
    console.log(k,obj[k]);
}
//console.log(obj.w);//有w，但上边for...in遍历不到

Object.getOwnPropertyDescriptors(obj);
/*
    w:{value: 456, writable: false, enumerable: false, configurable: true}
    x:{value: 1, writable: true, enumerable: true, configurable: true}
    y:{value: 2, writable: true, enumerable: true, configurable: true}
    z:{value: 3, writable: true, enumerable: true, configurable: true}
*/


