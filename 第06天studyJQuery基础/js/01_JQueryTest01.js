//JQuery样式操作
$(function () {
    var $div01 = $('#div01');
    var $div = $('div');
    //01、读取样式属性值
    var sFontSize01 = $div01.css('font-size');  // 文字大小默认为16px
    alert(sFontSize01)

    //02、写样式属性值
    //设置一个样式属性可以不写成字典形式
    $div01.css('color','red');
    $div01.css({'font-size':20,"font-weight":"bold"})
    //读取多个元素的样式属性值，得到的是第一个元素的值
    var sFontSize = $div.css('font-size');
    alert(sFontSize)

    //03、操作样式类名
    var $link01 = $('#link01');
    $link01.addClass('red');
    $link01.addClass('big');
    $link01.addClass('noLine');
    $link01.removeClass('big');
})