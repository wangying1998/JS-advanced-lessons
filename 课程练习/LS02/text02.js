//String类型
//空字符、字符和字符串、转义字符

//字面量
var str = "abc_def_ghi_jkl_mn";

//转义字符  \n \\ \' \"
console.log("abc\ndefghi\\\n\'mn\'");

//字符串常用操作
var str = "abc_def_ghi_jkl_mn";

/* str.split("_");           ["abc","def","ghi","jkl","mn"]   */
/* str.split("_",2);         ["abc","def"]                    */
/* str.concat("_opq");       "abc_def_ghi_jkl_mn_opq"         */
/* str.substr(4,7);          "def_ghi"                        */
/* str.substring(4,7);       "def"                            */
/* str.slice(2);             "c_def_ghi_jkl_mn"               */
/* str.slice(2,5);           "c_d"                            */
/* str.slice(-2);            "mn"                             */
/* str.slice(2,-2);          "c_def_ghi_jkl_"                 */


/*
String 对象属性
    constructor  对创建该对象的函数的引用
    length       字符串的长度
    prototype    允许你向对象添加属性和方法

String 对象方法

    charAt()     返回在指定位置的字符串
    concat()     连接字符串
    indexOf()    检索字符串
    lastIndexOf() 从后向前检索
    slice()	     提取字符串的片断，并在新的字符串中返回被提取的部分，若是两个参数，包括参数1对应的字符，不包括参数2下标对应的字符。
                 若是负数，则末尾从-1开始，若是两个参数，不包括参数2对应的字符
    split()	     把字符串按照某些符号分割为字符串数组。
    substr()	 从起始索引号提取字符串中 指定数目 的字符。两个参数 (起始位置，截取长度)
    substring()	 提取字符串中两个指定的索引号之间的字符，若是两个参数，包括参数1对应的字符，不包括参数2下标对应的字符。
********************************************************
    anchor()     创建HTML锚    
    charCodeAt() 返回在指定位置的字符的Unicode编码
    fromCharCode() 从字符编码创建一个字符串
    localeCompare()  用本地特定的顺序来比较两个字符串    
    match()	     找到一个或多个正则表达式的匹配。
    replace()	 替换与正则表达式匹配的子串。
    search()	 检索与正则表达式相匹配的值。
    sub()	     把字符串显示为下标。
    sup()	     把字符串显示为上标。
    toSource()	 代表对象的源代码。
    toString()	 返回字符串。
    valueOf()	 返回某个字符串对象的原始值。
*********************************************************
    fontcolor()  指定颜色
    fontsize()   指定字号
    big()        用大号字体显示字符串
    blink()      显示闪动字符串
    bold()       加粗
    italics()    斜体
    small()	     使用小字号来显示字符串。
    strike()	 使用删除线来显示字符串。
    toLocaleLowerCase()	     把字符串转换为小写。
    toLocaleUpperCase()	     把字符串转换为大写。
    toLowerCase()把字符串转换为小写。
    toUpperCase()把字符串转换为大写。
    fixed()      用打字机文本显示字符串
    link()       将字符串显示成链接
*/










