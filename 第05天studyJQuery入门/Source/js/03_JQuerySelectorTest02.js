//JQuery选择器转移
 $(function () {
     var $div01 = $('#div01');
     $div01.prev().css({'color':'red'});
     $div01.prevAll().css({'color':'orange'});
     $div01.next().css({'color':'pink'});
     $div01.nextAll().css({'color':'teal'});
     $div01.siblings().css({'text-decoration':'underline'});
     $div01.parent().css({'background':'lightgrey'});
     $div01.children().css({'background':'yellow'});
     //find()查找子集
     $div01.find('.span02').css({'background':'pink'});
 })