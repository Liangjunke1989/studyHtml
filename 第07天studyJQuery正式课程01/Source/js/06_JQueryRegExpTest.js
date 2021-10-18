//JQuery正则表达式

    //01、定义正则表达式
    var reTest01=/a/;
    var reTest02=/a/i;    // i为忽略大小写
    var reTest03=/\d+/;   // 匹配数字的字符串
    var reTest04=/^\d+$/; // 限制开头和结尾，进行严格匹配数字的字符串
    var sTr01='abc';
    var sTr02='ABC';
    var sTr03='123456';
    var sTr04='ABC123456';


    // var b01 = reTest01.test(sTr01);
    // alert(b01);
    // var b02 = reTest01.test(sTr02);
    // alert(b02);
    // alert(reTest02.test(sTr02));
    // alert(reTest03.test(sTr03));
    alert(reTest03.test(sTr04));
    alert(reTest04.test(sTr04));
