/*global define, $*/

define([ 'backbone', 'communicator', 'underscore', 'templates', 'utils/transitionRegion'],

    function(Backbone, Communicator, _, Templates, TransitionRegion){
        "use strict";

        return Backbone.Marionette.Layout.extend({

            template: Templates.home.layout,
            className: 'home-container region-container',

            regions: {
                rotator: '.content-blocks',
                tabPlaceholder: {
                    'selector': '.content-tab-placeholder',
                    regionType: TransitionRegion
                },
                hexTabs: {
                    'selector': '.hex-tabs'
                }
            },

            loadSubView: function(view){
                var self = this;
                self.tabPlaceholder.loadView(view);
            },

            transitionIn: function(){

                var self = this;
                var dfd = new jQuery.Deferred();

                //reset.
                $(self.rotator.el).hide();

                //fade in main...
                $(self.el).hide().fadeIn(650, function(){

                    //fade in content....
                    $(self.rotator.el).fadeIn(650, function(){
                        dfd.resolve(true);
                    }).css("display","table");

                });

                return dfd.promise();
            },

            transitionOut: function(){

                var self = this;
                var dfd = new jQuery.Deferred();

                $(self.rotator.el).fadeOut(650, function(){
                    $(self.el).fadeOut(650, function(){
                        dfd.resolve(true);
                    });
                });

                return dfd.promise();
            }


        });

    });



