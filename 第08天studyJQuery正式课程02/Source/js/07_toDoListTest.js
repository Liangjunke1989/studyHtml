//综合练习
$(function () {
    var $txt1 = $('#txt1');
    var $btn1 = $('#btn1');
    var $list = $('#list');

    //01、增加按钮点击事件
    $btn1.click(function () {
        var sVal = $txt1.val();

        //清空输入框的里面的内容，防止重复添加
        $txt1.val('');

        if (sVal == '') {
            alert('请输入内容！！！')
            return
        }

        var $li = $('<li><span>' + sVal + '</span>'
            + '<a href="javascript:;" class="up">⬆</a>'
            + '<a href="javascript:;" class="down">⬇</a>'
            + '<a href="javascript:;" class="del">删除</a>'
            + '</li>');
        $list.append($li);
        // 写法一：
        // $del2=$li.find('.del');
        // $del2.click(function () {
        //     $(this).parent().remove();
        // });
    })

    //02、删除超链接事件
    //方法一：写法复杂，性能不高
    // var $del = $('.del');
    // $del.click(function () {
    //    $(this).parent().remove();
    // });

    //方法二：事件委托写法，性能较高--------核心重点
    $list.delegate('a','click',function () {
        var sTr = $(this).prop('class');
        //删除操作
        if (sTr=='del'){
            $(this).parent().remove();
        }
        //向上移动
        if (sTr=='up'){
            var $prev = $(this).parent().prev();
            if ($prev.length==0){
                alert('已经是最上面的一个了！！！');
                return
            }
            $(this).parent().insertBefore($prev);
        }
        //向下移动
        if (sTr=='down'){
            var $next = $(this).parent().next();
            if ($next.length==0){
                alert('已经是最下面的一个了！！！');
                return
            }
            $(this).parent().insertAfter($next);
        }
    })
})