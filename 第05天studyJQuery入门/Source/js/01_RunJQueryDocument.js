//00、查看测试引入JQuery是否成功
//alert($);

//01、原生js写法
window.onload=function () {
    var oDiv = document.getElementById('div01');//oDiv:原生js对象
    alert('原生javascript获取的div：'+oDiv);
}

//02、jQuery写法一：
// $(document).ready(function () {
//     var $div01 = $('#div01');                          // $div:jQuery对象
//                                                        // $(''):里面参数为css样式写法，读取div
//     alert('jquery获取的div：'+$div01);                  // JQuery比原生js先弹出，jquery较快。
// })

//03、jQuery写法二：
$(function () {
    var $div01 = $('#div01');                          // $div:jQuery对象
    // $(''):里面参数为css样式写法，读取div
    alert('jquery获取的div：'+$div01);                  // JQuery比原生js先弹出，jquery较快。
})
