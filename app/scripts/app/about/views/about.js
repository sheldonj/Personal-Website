/*global define, $*/

define([ 'backbone', 'communicator', 'underscore', 'templates'],

    function(Backbone, Communicator, _, Templates){
        "use strict";

        return Backbone.Marionette.Layout.extend({

            template: Templates.about,
            className: 'about-container region-container',

            regions: {
            },

            onRender: function(){
               // console.log('about on render');
            },

            onShow: function(){
                //console.log('about on show');
            }

        });

    });



