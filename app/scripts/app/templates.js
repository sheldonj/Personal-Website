
define(function(require){
    "use strict";
    return {

        preloader: require('hbs!tmpl/preloader/layout'),
        nav: require('hbs!tmpl/nav/layout'),

        home:   require('hbs!tmpl/home/layout'),
        about:   require('hbs!tmpl/about/layout'),
        skills:   require('hbs!tmpl/skills/layout'),
        work:   require('hbs!tmpl/work/layout'),
        play:   require('hbs!tmpl/play/layout'),
        contact:   require('hbs!tmpl/contact/layout')

    };
});
