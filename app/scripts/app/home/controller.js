define(['backbone', 'communicator', 'app/home/views/home'],
    function(Backbone, Communicator, ParentView) {
        'use strict';


        return Backbone.Marionette.Controller.extend({

            initialize: function(options){
                console.log('home controller init');
                this.contentRegion = options.contentRegion;
                this.navRegion = options.navRegion;
                this.parentView = new ParentView();

                this.about();

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

             about: function(){
                 var self = this;
                 self._before(function(){
                     require(['app/home/views/about'], function(SubView) {
                         var subView = new SubView();
                         self.parentView.loadSubView(subView);
                     });

                 });
             },

             skills: function(){
                 var self = this;
                 self._before(function(){
                     require(['app/home/views/skills'], function(SubView) {
                         var subView = new SubView();
                         self.parentView.loadSubView(subView);
                     });
                 });
             },

             work: function(){
                 var self = this;
                 self._before(function(){
                     require(['app/home/views/work'], function(SubView) {
                         var subView = new SubView();
                         self.parentView.loadSubView(subView);
                     });
                 });
             },

             play: function(){
                 var self = this;
                 self._before(function(){
                     require(['app/home/views/play'], function(SubView) {
                         var subView = new SubView();
                         self.parentView.loadSubView(subView);
                     });
                 });
             },

             contact: function(){
                 var self = this;
                 self._before(function(){
                     require(['app/home/views/contact'], function(SubView) {
                         var subView = new SubView();
                         self.parentView.loadSubView(subView);
                     });
                 });
             }


        });


    });




