//JS对象的属性
/*
    - 数据属性（property，属性），字符串的键到值的映射（包括基本类型数据、对象、函数）
    - 访问器属性（accessor，或称为访问器），访问属性的方法，注意：访问和设置时不加括号
    - 内置属性（internal property）存在与ECMAScript规范中，不能直接访问
*/

// 访问器属性 实例一
var o = {
    _x:1.0,    //习惯前面加下划线表示私有变量
    get x(){
        return this._x;
    },
    set x(val){
        this._x = val;
    }
};
console.log(o.x);    //1
o.x = 2;    // 都指向同一个变量
console.log(o.x,o._x);    //2 2


// 只有get方法是只读属性    只有set方法是只写属性并且读取时返回undefined
//访问器属性 实例二 只读
var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);// 1 1

// 访问器属性 只写
var o = {
    _x:1.0,
    set x(val){
        this._x = val;
    }
};
console.log(o.x);  // undefined
o.x = 2;
console.log(o.x,o._x);   // undefined  2


// 访问器属性 实例三
var p1 = {
    _name:"Jack",
    _age:23,
    set age(val){
        if(val>0&&val<150){
            this._age = val;
        }else{
            console.log("请设置正常年龄");
        }
    },
    get age(){
        return this._age;
    }
};
p1.age = 178;      // 提示 请设置正常年龄
console.log(p1.age);      // 23



//访问器属性 综合实例
var p ={
    x:1,
    y:1,
    get r(){return Math.sqrt(this.x*this.x+this.y*this.y);},
    set r(newValue){
        var oldValue = Math.sqrt(this.x*this.x+this.y*this.y);
        var ratio = newValue/oldValue;
        this.x*=ratio;
        this.y*=ratio;
    },
    get theta(){return Math.atan2(this.y,this.x);}
};
var q = Object.create(p);
q.x = 2;
q.y = 2;
console.log(q.r);
console.log(q.theta);

