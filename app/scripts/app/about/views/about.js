/*global define, $*/

define([ 'backbone', 'communicator', 'underscore', 'templates', 'utils/transitionRegion'],

    function(Backbone, Communicator, _, Templates, TransitionRegion){
        "use strict";

        return Backbone.Marionette.Layout.extend({

            template: Templates.about.layout,
            className: 'about-container region-container',

            regions: {
                tabPlaceholder: {
                    'selector': '.content-tab-placeholder',
                    regionType: TransitionRegion
                }
            },

            onRender: function(){
               // console.log('about on render');
            },

            onShow: function(){
                //console.log('about on show');
            },

            loadSubView: function(view){
                console.log('load sub view', view);
                var self = this;

                self.hideTiles();
                self.tabPlaceholder.loadView(view);
            },

            emptySubView: function(){
                var self = this;
                self.showTiles();
                self.tabPlaceholder.emptyView();
            },

            hideTiles: function(){
                $(this.el).find('.list-hex-grid').addClass('closed');
            },

            showTiles: function(){
                $(this.el).find('.list-hex-grid').removeClass('closed');
            }


        });

    });



