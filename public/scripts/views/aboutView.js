'use strict';

var app = app || {};

(function (module) {

    const aboutView = {};

    // hides survey and generator, shows the about us route
    aboutView.init = function () {
        $('.about').show().siblings().hide()
    }

    module.aboutView = aboutView;
})(app);