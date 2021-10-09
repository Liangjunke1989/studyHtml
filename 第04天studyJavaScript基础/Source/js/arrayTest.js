//1、创建数组
//方式一：
var aList0 = new Array(1,2,3);
//方式二：
var aList=[1,2,3,'a'];

//2、数组常用的一些方法
//01、获取数组的成员个数
var iLen = aList.length;
alert("aList成员的个数为："+iLen);

//02、操作数组的某个成员
alert("aList中第四个成员为："+aList[3]);

//03、在数组后面增加成员
aList.push('b','c','d',1,2,3,4,5);
alert(aList);

//04、在数组后面删除最后一个成员
aList.pop();
alert(aList);

//05、将数组进行反转
// aList.reverse();
// alert(aList);

//06、后去某个成员在数组中第一次出现的索引值
//var iPos = aList.indexOf(2);//没有的话，返回-1
//alert(iPos);

//07、将数组通过某个字符串拼接，获得一个大的字符串
// var s = aList.join('_');
// alert(s);
//alert(aList.length)

//08、在数组中同时增加或删除成员
aList.splice(6,5,'e','f');//第二个参数为：删除个数
aList.splice(0,3);
alert(aList);

//3、多维数组：两层下标
var aList02=[[1,2,3],['a','b','c','d']];
alert(aList02[1][3]);