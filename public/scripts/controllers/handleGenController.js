'use strict';

var app = app || {};

(function (module){
    const control = {};

    control.init = function () {
        app.words.requestWords();    
    }

    module.control = control;

})(app);