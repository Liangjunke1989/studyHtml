//JQuery选择器
$(function () {
    //01、元素选择器
    var $myId = $('#myId');                       // 选择id为myId的网页元素
    var $myClass = $('.myClass');                 // 选择class为myClass的元素
    var $span01 = $('#ul01 li span');             // 选择id为ul1元素下所有li下的span元素              ------注意！

    //02、属性选择器
    var $myClass02 = $('div[class="myClass02"]'); //
    var $inputFirst = $('input[name=first]');      // 选择name属性等于first的input元素                 ------注意！

    //03、对选择集过滤
    //3.1 选择包含span标签的li
    var $li000 = $('li').has('span');
    //3.2 选择class不等于myClass的div元素
    var $div111 = $('div').not('.myClass');
    //3.3 选择第4个li元素
    var $li1111 = $('li').eq(3);

    //测试
    $myId.css({'color':'red','font-size':28});    // css里面使用键值对字典的形式
    $myClass.css({'color':'orange','font-size':24});
    $span01.css({'background':'yellow','color':'red','font-size':21});
    $myClass02.css({'color':'pink','font-size':26});
    $li000.css({'list-style':'none'});
    $div111.css({'color':'blue','font-size':21,'background':'teal'});
    $li1111.css({'list-style':'-moz-lao'});


})
