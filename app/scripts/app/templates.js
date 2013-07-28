
define(function(require){
    "use strict";
    return {

        preloader: require('hbs!tmpl/preloader/layout'),
        nav: require('hbs!tmpl/nav/layout'),

        home:  {
            layout: require('hbs!tmpl/home/layout'),
            about:  require('hbs!tmpl/home/about'),
            skills:  require('hbs!tmpl/home/skills'),
            work:  require('hbs!tmpl/home/work'),
            play:  require('hbs!tmpl/home/play'),
            contact:  require('hbs!tmpl/home/contact')
        },

        about: {
            layout:require('hbs!tmpl/about/layout'),
            bio:   require('hbs!tmpl/about/bio'),
            experience:   require('hbs!tmpl/about/experience'),
            interests:   require('hbs!tmpl/about/interests')
        },


        skills:   require('hbs!tmpl/skills/layout'),
        work:   require('hbs!tmpl/work/layout'),
        play:   require('hbs!tmpl/play/layout'),
        contact:   require('hbs!tmpl/contact/layout')

    };
});
