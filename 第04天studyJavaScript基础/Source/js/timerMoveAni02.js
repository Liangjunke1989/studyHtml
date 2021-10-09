//JS制作无缝滚动动画
window.onload=function () {
    var oList = document.getElementById('list');
    var oLeft = document.getElementById('btn01');
    var oRight = document.getElementById('btn02');
    var oSlide = document.getElementById('slide');

    

    //将ul中的3个li复制一份，称为6个li
    oList.innerHTML=oList.innerHTML+oList.innerHTML;

    var iLeft=0;
    const ISPEED=3;
    var iSpeed=3;
    var timer00 = setInterval(fnMove,20);
    function fnMove() {
        iLeft-=iSpeed;
        //运动到最左边的时候
        if (iLeft<-1000){
            iLeft=0;
        }
        //运动到最右边的时候
        if (iLeft>0){
            iLeft=-1000;
        }
        oList.style.left=iLeft+'px';
    }
    
    //左右箭头点击事件
    oLeft.onclick=function () {
        iSpeed=-3;
    }
    oRight.onclick=function () {
        iSpeed=3;
    }

    //给滚动的图片外面的容器标签做鼠标的移入移出事件
    oSlide.onmouseover=function () {
        clearInterval(timer00);
    }
    //给滚动的图片外面的容器标签做鼠标的移入移出事件
    oSlide.onmouseout=function () {
        timer00 = setInterval(fnMove,20);
    }
}