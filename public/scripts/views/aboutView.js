'use strict';

var app = app || {};

(function (module) {

    const aboutView = {};
    $('footer #about-route').click(function (){
        console.log('worked');
        page('/about');
    });
    // hides survey and generator, shows the about us route
    aboutView.init = function () {
        $('.about').show().siblings().hide()
    }

    module.aboutView = aboutView;
})(app);