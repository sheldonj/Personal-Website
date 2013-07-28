define(['backbone', 'subrouter'],function(Backbone, Subrouter) {
    'use strict';

    return Backbone.Marionette.SubRouter.extend({

        appRoutes: {
            "" : "default",
            "/" : "default",
            "bio" : "bio",
            "experience" : "experience",
            'interests' : 'interests'
        }
    });

});



