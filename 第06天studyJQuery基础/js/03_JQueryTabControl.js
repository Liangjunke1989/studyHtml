//JQuery选项卡

$(function () {
    var $btn = $('.tab_btns input');
    var $div= $('.tab_cons div');

    $btn.click(function () {
        var $oThis = $(this).addClass('active');
        $oThis.siblings().removeClass('active');  // siblings()反选

        var $oCurrentDiv = $div.eq($oThis.index());
        $oCurrentDiv.addClass('current');
        $oCurrentDiv.siblings().removeClass('current');
    })
})