
define(['backbone', 'communicator'], function(Backbone, Communicator) {
    'use strict';

    return Backbone.Marionette.AppRouter.extend({

        appRoutes:{
            ''      : 'home',
            '/'     : 'home',
            'home'     : 'home',
            'about'      : 'about',
            'work'      : 'work',
            'play'      : 'play',
            'skills'      : 'skills',
            'contact'      : 'contact'
        },

        initialize: function(){

        }

    });

});
