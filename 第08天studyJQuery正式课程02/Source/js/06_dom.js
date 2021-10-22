//Dom操作
$(function () {
    var $p01 = $('#p01');
    var $p02 = $('#p02');
    var $p03 = $('#p03');
    var $div01 = $('.div01');

    //1、对现有标签剪切和粘贴的操作
    //01、当前元素的里面的后面要放另一个元素
    //$div01.append($p02);
    //$p02.appendTo($div01);

    //02、当前元素的里面的前面要放另一个元素
    //$div01.prepend($p03);
    //$p03.prependTo($div01);

    //03、当前元素的外面的后面要放另一个元素
    //$div01.after($p02);
    //$p02.insertAfter($div01);

    //04、当前元素的外面的前面要放另一个元素
    //$div01.before($p01);
    //$p01.insertBefore($div01);
    //$p01.remove();

    //2、创建新标签
    var $div02=$('<div style="background: yellowgreen">这是div02</div>'); //创建一个空的div
    //$div01.after($div02);
    $div02.insertBefore($p01);
})