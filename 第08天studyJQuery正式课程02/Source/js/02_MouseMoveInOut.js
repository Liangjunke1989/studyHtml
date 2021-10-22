//JQuery鼠标移入移出事件
$(function () {
    var $box=$('.box');
    // //01、绑定鼠标移入事件
    // $box.mouseover(function(){
    //    $(this).stop().animate({'margin-top':100});
    // })
    // //02、绑定鼠标移出事件
    // $box.mouseout(function(){
    //     $(this).stop().animate({'margin-top':50});
    // })
    //上面的移入移出事件，移动到子元素上也会触发，如不希望触发，可以改成下面的形式
    //阻止了事件冒泡
    $box.mouseenter(function(){
       $(this).stop().animate({'margin-top':100});
    })
    //阻止了事件冒泡
    $box.mouseleave(function(){
        $(this).stop().animate({'margin-top':50});
    })
})