//JQuery事件
$(function () {
    var $input = $('#input01');
    var $form01 = $('#form01');

    //01、绑定失去焦点的事件
    // $input.blur(function () {
    //     alert($(this).val())
    // })

    //02、绑定submit提交事件
    $form01.submit(function () {
        //判断数据是否合法
        //不合法
        //不进行提交，阻止表单提交
        return false;
        //合法
        alert('提交了！！！')
    })

})