//字符串操作方法

var iNum01=12;
var iNum02=12.33;
var sNum01='12';
var sNum02='12.44';

//1、加法
// alert(iNum01+sNum01);//加法：字符串拼接
// alert(iNum01+iNum02);//加法：两边都是数字

//2、将整数的字符串转换成整数
// var reslut=parseInt(sNum01)+iNum02
// alert(reslut)

//3、将小数的字符串转换成小数
// alert(parseFloat(sNum02)+iNum02)

//4、将字符串转换成数组
// alert(sNum02.split('.'))
// var array0=sNum02.split('.')
// alert(array0[1].split(''))

//5、获取某小段字符在大段字符第一次的索引值
//  var sTr='abcdefabcdefabcdefabcdef';
// alert(sTr.indexOf('e'));//返回索引值

//6、字符串切片
// alert(sTr.substring(2,6));//索引值
//alert(sTr.substring(2));//索引值2开始，截取到结尾

//7、字符串反转
// alert(sTr.split('').reverse().join(''));//数组反转reverse
