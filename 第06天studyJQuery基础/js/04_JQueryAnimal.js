//JQuery动画
$(function () {
    var $btn = $('#btn');
    var $box = $('.box');
    $btn.click(function fnMove() {
        //$box.css('width',1000);
        $box.animate({'width':1000},500,'swing',function () {
            //alert('动画播放完成！！！');
            $box.animate({'margin-top':400},1000,function () {
                $box.animate({'margin-top':0,'width':200},1500,function () {
                    fnMove();
                });
            });
        });
        /*
            animate参数：
                参数一：要做动画的样式属性，写成字典的形式
                参数二：动画持续的时间,默认值为400ms
                参数三：动画曲线： swing缓冲运动，linear匀速运动
                参数四：回调函数
         */
    })


})