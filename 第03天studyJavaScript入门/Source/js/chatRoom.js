window.onload=function () {
    var oWords=document.getElementById('words');
    var oWho=document.getElementById('who');
    var oTalk=document.getElementById('talkwords');
    var oBtn=document.getElementById('talksub');

    oBtn.onclick=function () {
        //01、获取下拉框的value属性值
        var sValue01 = oWho.value;
        //02、获取单行文本输入框里面的内容
        var sValue02=oTalk.value;

        //清空输入框的内容
        oTalk.value='';
        //03、用户发送消息不能为空----判断输入框是否为空
        if(sValue02==''){
            alert('请输入内容，消息不能为空进行发送')
            return;
        }
        //04、拼接结构的字符串
       //<div className="atalk"><span>A说：吃饭了吗？</span></div>
        var sTr='';
        if (sValue01==0){
            sTr='<div class="atalk"><span>A说：'+sValue02+'</span></div>';
        }else {
            sTr='<div class="btalk"><span>B说：'+sValue02+'</span></div>';
        }
        //05、将结构的字符串放到聊天记录的容器标签中
        oWords.innerHTML+=sTr;
    }
}