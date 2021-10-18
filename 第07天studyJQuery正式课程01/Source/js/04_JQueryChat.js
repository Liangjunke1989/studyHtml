//JQuery聊天室
$(function () {
    var $words = $('#words'),
     $who=$('#who'),
     $talk=$('#talkwords'),
     $btn=$('#talksub');
    
    $btn.click(function () {
        //01、读取属性值
        //写法一：
        // var sValue01=$who.prop('value');
        // var sValue02=$talk.prop('value');
        // // alert(sValue01+' : '+sValue02);
        //
        // // 清空输入框的值
        // $talk.prop({'value':''});

        //写法二：
        //操作value属性可以改成下面 val()方法的写法：
        var sValue01=$who.val();
        var sValue02=$talk.val();
        //清空输入框的值,写入空字符串
        $talk.val('');

        //02、判断输入框是否为空
        if (sValue02==""){
            alert('请输入聊天信息！！！');
            return;
        }
        //
        var sTr='';
        if (sValue01==0){
            sTr= '<div class="atalk"><span>A说：'+sValue02+'</span></div>';
        }else {
            sTr= '<div class="btalk"><span>B说：'+sValue02+'</span></div>';
        }
        //
        var sConnent=$words.html()+sTr;
        $words.html(sConnent);
    })
})