/******************************************
    File Name: custom.js
    Template Name: Landigoo
    Created By: MelodyThemes
    Envato Profile: http://themeforest.net/user/melodythemes
    Website: https://melodythemes.com
    Version: 1.0
/****************************************** */

(function($) {
    "use strict";
    /* =========================
        SCROLL MENU
    =========================*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.header-block-top').addClass('fixed-menu');
        } else {
            $('.header-block-top').removeClass('fixed-menu');
        }
    });
})(jQuery);