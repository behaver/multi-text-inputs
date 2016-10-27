/**
 * 添加表单项
 */
var mtiAdd = function (event) {
    event.preventDefault();
    var addA = $(event.currentTarget);
    var originItem = addA.parents('.mti-item');
    var newItem = originItem.clone();
    var wrap = addA.parents('.mti');
    wrap.append(newItem);
    addA.text('移除').removeClass('mti-add').addClass('mti-del');
}

/**
 * 移除表单项
 */
var mtiDel = function (event) {
    event.preventDefault();
    var delA = $(event.currentTarget);
    var item = delA.parents('.mti-item').remove();
}

jQuery(document).ready(function($) {
    $('.mti').on('click', '.mti-add', mtiAdd);
    $('.mti').on('click', '.mti-del', mtiDel);
});