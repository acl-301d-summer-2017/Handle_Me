'use strict';

var app = app || {};

(function (module) {
    const aboutControl = {};


    aboutControl.init = function () {
        app.aboutView.init()
    }

    module.aboutControl = aboutControl;

})(app); 