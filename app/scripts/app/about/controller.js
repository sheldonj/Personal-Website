define(['backbone', 'communicator', 'app/about/views/about'],
    function(Backbone, Communicator, ParentView) {
        'use strict';


        return Backbone.Marionette.Controller.extend({

            initialize: function(options){
                var self = this;
                console.log('about controller init');
                self.contentRegion = options.contentRegion;
                self.navRegion = options.navRegion;
                self.parentView = new ParentView();

            },

            _before: function(callback){

                var self = this;

                if(self.contentRegion.currentView == self.parentView){
                    if(callback){
                        callback();
                    }
                } else{
                    self.contentRegion.loadView( self.parentView, function(){
                        if(callback){
                            callback();
                        }
                    });
                }

            },

            default: function(){

                var self = this;
                self._before(function(){
                    self.parentView.emptySubView(function(){
                        console.log('default about view.');
                    });
                });

            },

             bio: function(){

                 var self = this;
                 self._before(function(){
                     require(['app/about/views/bio'], function(SubView) {
                         var subView = new SubView();
                         self.parentView.loadSubView(subView);
                     });

                 });
             },

             experience: function(){

                 var self = this;
                 self._before(function(){
                     require(['app/about/views/experience'], function(SubView) {
                         var subView = new SubView();
                         self.parentView.loadSubView(subView);
                     });
                 });
             },

             interests: function(){

                 var self = this;
                 self._before(function(){
                     require(['app/about/views/interests'], function(SubView) {
                         var subView = new SubView();
                         self.parentView.loadSubView(subView);
                     });
                 });
             }



        });


    });




