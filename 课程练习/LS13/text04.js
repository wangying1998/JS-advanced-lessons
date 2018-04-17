// 对象属性的操作  -- 增删改查
/*
    - 添加和删除自有属性
    - 访问和修改自有属性
    - 通过点与中括号访问属性的区别（写个访问属性的for循环练习）
*/

// 对象中键值对key:value  key是string类型，用中括号访问时要加引号

var obj = {};
obj.x = 2;//直接添加属性
console.log(obj.x);//通过.访问属性
obj.x = 5;//设置属性
console.log(obj["x"]);//通过[]访问属性
delete obj.x;//删除属性
console.log(obj.x);

//访问属性的for循环练习
var obj2 = {
    id_1:2,
    id_2:4,
    id_3:6,
    id_4:8,
    id_5:10
};

var obj3 = {};
for(var i=0;i<10;i++){
    obj3.i = i;
}

var obj4 = {};
for(var i=0;i<10;i++){
    obj4[i] = i;
}
console.log(obj3);  // {i: 9}  变量共享
console.log(obj4);
    // {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}
