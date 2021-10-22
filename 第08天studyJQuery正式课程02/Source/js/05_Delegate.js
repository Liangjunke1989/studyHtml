//事件委托
 $(function () {
     var $list = $('.list');
     var $li = $('.list li');

     //写法一：最初写法
     //所有li遍历，某个绑定点击事件
     // $li.click(function () {
     //    $(this).css({'background':'red'});
     // })

     //写法二：事件委托的写法
     //性能较高
     $list.delegate('li','click',function () {
         $(this).css({'background':'red'})
     });

     
 })