//JQuery绑定事件和this关键字
$(function () {
    var $li = $('.list li');
    //绑定click事件
    $li.click(function () {                   //li点击事件
        //this表示当前发生事件的对象
        //this.style.background='red';         //----this为原生对象，原生对象的写法
        $(this).css('background','orange');    //----将this封装为jq对象，使用jq对象.css的方式

        //获取当前点击的li的索引值
        alert($(this).index());
        var $p = $('p');
        alert( $p.eq(0).index());//相对于兄弟标签来讲， 索引值是0    索引值是相对于同级元素来讲
        alert( $p.eq(1).index());//相对于兄弟标签来讲， 索引值是0
    })

})