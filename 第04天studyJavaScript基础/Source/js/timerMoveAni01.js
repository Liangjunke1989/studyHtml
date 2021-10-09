//定时器制作移动盒子
window.onload=function () {
    var oBox=document.getElementById('box');
    var iLeft=0;
    var iSpeed=5;
    var timer01 = setInterval(fnMove,20);//经验数据30毫秒约等于1帧
    function fnMove() {
        iLeft+=iSpeed;
        if (iLeft>800) {
            iSpeed = -5;
            //clearInterval(timer01); //关闭计时器
        }
        if(iLeft<0){  //需要逻辑调试
            iSpeed=5;
        }
        oBox.style.left=iLeft+'px';//Js中数字和字符串可以相加，结果为字符串。
    }
}