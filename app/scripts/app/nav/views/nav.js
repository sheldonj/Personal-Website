/*global define, $*/

define([ 'backbone', 'communicator', 'underscore', 'templates'],

    function(Backbone, Communicator, _, Templates){
        "use strict";

        return Backbone.Marionette.Layout.extend({

            template: Templates.nav,
            className: 'nav-container',
            regions: {},
            events: {
                'click .nav-button' : 'navigate'
            },

            navigate: function(e){
                e.preventDefault();
                var path = $(e.currentTarget).attr('href');
                Communicator.cmds.execute('navigation:redirect', path);
            }


        });

    });



