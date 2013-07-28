
define(['backbone', 'communicator'], function(Backbone, Communicator) {
    'use strict';

    return Backbone.Marionette.AppRouter.extend({

        appRoutes:{
            ''      : 'home',
            '/'     : 'home',
            'home'     : 'home',
            'home/*path'     : 'home',

            'about'      : 'about',
            'about/*path'      : 'about',

            'work'      : 'work',
            'play'      : 'play',
            'skills'      : 'skills',
            'contact'      : 'contact'
        },

        initialize: function(){

        }

    });

});
