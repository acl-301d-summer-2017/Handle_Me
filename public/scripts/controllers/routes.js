'use strict';
var app = app || {};

page('/gen', app.genControl.init);
page('/', app.surveyControl.init);
page('/about', app.aboutControl.init);

page();