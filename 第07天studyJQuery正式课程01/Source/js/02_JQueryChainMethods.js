//JQuery链式调用 ----层级菜单
$(function () {
    var $a=$('.level1');
    $a.click(function () {
        $(this).next().stop().slideToggle().parent().siblings().children('ul').slideUp();
    })
})