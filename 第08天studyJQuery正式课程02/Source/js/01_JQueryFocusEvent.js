//JQuery焦点事件
$(function () {
    var $input01 = $('#input01');

    // 01、绑定获得焦点的事件
    // $input01.focus(function () { //反复触发
    //     alert($(this).val());
    // })

    // $input01.click(function () {   //触发一次
    //     alert($(this).val());
    // })
    $input01.focus();


    //02、绑定change事件
    $input01.change(function () {
        alert($(this).val());
    })
})