//弹框显示
$(function () {
    $('#btn01').click(function () {
        $('#pop').stop().show();
        return false;  //阻止事件冒泡
    });
    $('#shutoff').click(function () {
        $('#pop').stop().hide();
    });
    //点击弹框本身不隐藏
    $('.pop_con').click(function () {
        return false;
    })
    //点击弹框其他地方，关闭弹框
    $(document).click(function () {
        $('#pop').stop().hide();
    });
})