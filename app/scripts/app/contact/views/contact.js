/*global define, $*/

define([ 'backbone', 'communicator', 'underscore', 'templates'],

    function(Backbone, Communicator, _, Templates){
        "use strict";

        return Backbone.Marionette.Layout.extend({

            template: Templates.contact,
            className: 'contact-container region-container',

            regions: {
            },

            onRender: function(){
                console.log('contact on render');
            },

            onShow: function(){
                console.log('contact on show');
            }

        });

    });



