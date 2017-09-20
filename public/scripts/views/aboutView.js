'use strict';

var app = app || {};

(function (module){

    const aboutView= {};


    AboutView.init = function (){
    $('.survey').hide();
    $('.generator').hide();
    $('.about').show();
    }

    module.aboutView = aboutView;
})(app);