//事件冒泡
$(function () {
    var $son = $('.son');
    $son.click(function () {
        //alert('son:'+'点击到了！！！');
    });

    //匿名函数中的第一参数为：事件对象参数
    //写法一：完整写法
    // $('.father').click(function (evAA){
    //     alert('fahter:'+'点击到了！！！')
    //     //01、阻止事件冒泡的完整写法
    //     evAA.stopPropagation(evAA);                //阻止事件冒泡，不会再继续往上传！
    //     //02、阻止默认行为
    //     evAA.preventDefault();
    // });
    //写法二：简单写法
    $('.father').click(function (evAA){
        alert('fahter:'+'点击到了！！！')
        //将事件冒泡和阻止默认行为合并写法
        return false;
    });

    $('.grandfather').click(function () {
        alert('grandfahter:'+'点击到了！！！')
    })
    $(document).click(function (){
        alert('doucument:'+'点击到了！！！')
    });
})