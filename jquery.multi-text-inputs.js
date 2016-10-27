/**
 * 添加表单项
 */
var mtiAdd = function (event) {
    event.preventDefault();
    var addA = $(event.currentTarget);
    var wrap = addA.parents('.mti');
    wrap.append('<div class="mti-item"><input name="' + event.data.name + '[]" type="text"/><a href="#" class="mti-add">新增</a></div>');
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
    var name = $('.mti').attr('data-name');
    $('.mti').append('<div class="mti-item"><input name="' + name + '[]" type="text"/><a href="#" class="mti-add">新增</a></div>');
    $('.mti').on('click', '.mti-add', { name: name } , mtiAdd);
    $('.mti').on('click', '.mti-del', mtiDel);
});