//JQuery属性操作
$(function () {
    var $a = $('#link01');

    //读取属性值
    var sId = $a.prop('id');
    //alert(sId);

    //写属性值
    $a.prop({'href':'http://www.baidu.com','title':"这个是去往百度的链接"});

    //读取元素包裹的内容
    //alert($a.html());
    //写入元素包裹的内容
    $a.html('<span>百度</span>');

})