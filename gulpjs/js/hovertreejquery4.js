﻿$(function () {
    //将内容插入到body开始处，页面加载完毕后自动展开
    $('body').prepend("<div class='hvttop'><a href='http://hovertree.com/' target='_blank' class='link'></a></div>");
    $('.hvttop').slideDown(1500, function () {
        $('.hvttop').append("<a href='javascript:;'  target='_self' class='up'></a>");
    });
    //设置延时函数
    function adsUp() {
        $('.hvttop').animate({
            height: '100px'
        }, 1000, function () {
            $(this).find('.up').addClass('down').removeClass('up');
        });
    }
    //五秒钟后自动收起
    var t = setTimeout(adsUp, 5000);
    //点击收起
    $('.hvttop a.up').live('click', function () {
        clearTimeout(t);
        $('.hvttop').animate({
            height: '100px'
        }, function () {
            $(this).find('.up').addClass('down').removeClass('up');
        });
    });

    //点击下拉
    $('.hvttop a.down').live('click', function () {
        $(this).css({
            opacity: '0',
            filter: 'alpha(opacity=0)'
        });
        $('.hvttop').animate({
            height: '250px'
        }, function () {
            $(this).find('.down').addClass('up').removeClass('down').css({ opacity: '1', filter: 'alpha(opacity=100)' });
        });
    });
});