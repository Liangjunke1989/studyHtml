//JQuery特殊动画
$(function () {
    var $btn=$('#btn');
    var $box=$('.box');

    $btn.click(function () {
        //01、元素显示隐藏效果
        //$box.hide();//隐藏
        //$box.show();//显示
        //$box.toggle();//显示隐藏判断

        //02、元素淡入淡出效果
        //$box.fadeIn();
        //$box.fadeOut();
        //$box.fadeToggle();

        //03、元素向下展开/向上卷起
        //$box.slideUp();//需默认元素是显示的，从显示到隐藏的效果。
        //$box.slideDown();//需默认元素是隐藏的，从隐藏到显示的效果。
        $box.stop().slideToggle();//先停止之前的动画，然后在进行最后一次的动画。

    });
})