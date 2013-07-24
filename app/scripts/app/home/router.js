define(['backbone', 'subrouter'],function(Backbone, Subrouter) {
    'use strict';

    return Backbone.Marionette.SubRouter.extend({

        appRoutes: {
            "" : "about",
            "/" : "about",
            "about" : "about",
            "skills" : "skills",
            'work' : 'work',
            'play' : 'play',
            'contact' : 'contact'
        }
    });

});



