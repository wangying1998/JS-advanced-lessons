//分组的 反向引用
//如何将2017-10-23转成10/23/2017
"2017-10-23".replace(/(\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1"); // 10/23/2017

//分组的 忽略分组 （?:）
"2017-10-23".replace(/(?:\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1"); // 23/$3/10

//注意括号的转义字符，第一个相当于做了分组
console.log(/^(ab)$/.test("(ab)")); // false
console.log(/^\(ab\)$/.test("(ab)")); // true

//正则前瞻，了解即可 判断后边是否满足断言
console.log("a23*4vv".replace(/\w(?=\d)/g,"X"));//XX3*4vv 正项前瞻
console.log("a23*4v8".replace(/\w(?=\d)/g,"X"));//XX3*4X8
console.log("a23*4v8".replace(/\w(?!\d)/g,"X"));//a2X*XvX 负项前瞻

/*
(?=pattern)  正向先行断言
代表字符串中的一个位置，紧接该位置之后的字符序列能够匹配pattern。 例如对”a regular expression”这个字符串，
要想匹配regular中的re，但不能匹配expression中的re，可以用”re(?=gular)”，该表达式限定了re右边的位置，这个
位置之后是gular，但并不消耗gular这些字符，将表达式改为”re(?=gular).”，将会匹配reg，元字符.匹配了g，括号
这一砣匹配了e和g之间的位置。

(?!pattern) 负向先行断言 
代表字符串中的一个位置，紧接该位置之后的字符序列不能匹配pattern。 
例如对”regex represents regular expression”这个字符串，要想匹配除regex和regular之外的re，
可以用”re(?!g)”，该表达式限定了re右边的位置，这个位置后面不是字符g。负向和正向的区别，就在于
该位置之后的字符能否匹配括号中的表达式。

(?<=pattern) 正向后行断言 
代表字符串中的一个位置，紧接该位置之前的字符序列能够匹配pattern。 
例如对”regex represents regular expression”这个字符串，有4个单词，要想匹配单词内部的re，
但不匹配单词开头的re，可以用”(?<=\w)re”，单词内部的re，在re前面应该是一个单词字符。之所以
叫后行断言，是因为正则表达式引擎在匹配字符串和表达式时，是从前向后逐个扫描字符串中的字符，
并判断是否与表达式符合，当在表达式中遇到该断言时，正则表达式引擎需要往字符串前端检测已扫描
过的字符，相对于扫描方向是向后的。

(?<!pattern) 负向后行断言 
代表字符串中的一个位置，紧接该位置之前的字符序列不能匹配pattern。 
例如对”regex represents regular expression”这个字符串，要想匹配单词开头的re，
可以用”(?<!\w)re”。单词开头的re，在本例中，也就是指不在单词内部的re，即re前面
不是单词字符。当然也可以用”\bre”来匹配。
*/

