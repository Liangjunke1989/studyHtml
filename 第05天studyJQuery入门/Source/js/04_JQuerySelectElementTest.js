//JQuery判断是否选择了元素
$(function () {
    var $div01 = $('#div01');
    var $div02 = $('#div02');
    var iLength = $div01.length;
    alert(iLength);

    var $li = $('li');
    var iLen = $li.length;
    alert(iLen);
    alert($div02.length);
    alert($('div01').prev().length);
})