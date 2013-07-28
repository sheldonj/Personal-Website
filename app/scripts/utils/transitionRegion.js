define(['backbone', 'communicator', 'underscore'],
    function(Backbone, communicator, _){
        "use strict";

        return Backbone.Marionette.Region.extend({

            initialize: function() {
                this.loadedViews = [];
            },

            loadView: function(view, callback){

                var self = this;

                if(self.targetView){
                   self.loadedViews.push();
                }

                self.targetView = view;

                //transition out anything left behind.
                self.transitions = [];
                _.each(self.loadedViews, function(loadedView){

                    //if the view has it's own transition use that,
                    //else use the baked in default.
                    if(!_.isUndefined(loadedView.transitionOut) && _.isFunction(loadedView.transitionOut)){
                        self.transitions.push(loadedView.transitionOut());
                    } else{
                        self.transitions.push(self.transitionOut(loadedView));
                    }

                });

                //transition in new view.
                $.when.apply($, self.transitions).then(function(){
                    self.targetView.render();
                    $(self.el).append(self.targetView.el);

                    //if the view has it's own transition use that,
                    //else use the baked in default.
                    if(!_.isUndefined(self.targetView.transitionIn) &&_.isFunction(self.targetView.transitionIn)){
                        self.transitions.push(self.targetView.transitionIn());
                    } else{
                        self.transitions.push(self.transitionIn(self.targetView));
                    }


                 //clean up
                }).done(function () {

                    _.each(self.loadedViews, function(loadedView){

                        // call 'close' or 'remove', depending on which is found
                        if (loadedView.close) { loadedView.close(); }
                        else if (loadedView.remove) { loadedView.remove(); }

                    });

                    self.loadedViews = [];

                    Backbone.Marionette.triggerMethod.call(self, "close");


                    self.loadedViews.push(self.targetView);
                    self.currentView = self.targetView;

                    Backbone.Marionette.triggerMethod.call(self.targetView, "show");
                    Backbone.Marionette.triggerMethod.call(self, "show", self.targetView);

                    if(!_.isUndefined(callback)){
                        callback();
                    }

                });

            },

            emptyView: function(callback){
                var self = this;

                //transition out anything left behind.
                self.transitions = [];
                _.each(self.loadedViews, function(loadedView){

                    //if the view has it's own transition use that,
                    //else use the baked in default.
                    if(!_.isUndefined(loadedView.transitionOut) && _.isFunction(loadedView.transitionOut)){
                        self.transitions.push(loadedView.transitionOut());
                    } else{
                        self.transitions.push(self.transitionOut(loadedView));
                    }

                });

                //transition in new view.
                $.when.apply($, self.transitions).then(function(){

                    _.each(self.loadedViews, function(loadedView){

                        // call 'close' or 'remove', depending on which is found
                        if (loadedView.close) { loadedView.close(); }
                        else if (loadedView.remove) { loadedView.remove(); }

                    });

                    Backbone.Marionette.triggerMethod.call(self, "close");

                    self.loadedViews = [];
                    self.currentView = null;

                    if(!_.isUndefined(callback)){
                        callback();
                    }
                });
            },

            transitionIn: function(view){
                var dfd = new jQuery.Deferred();
                $(view.el).hide().fadeIn(650, function(){
                    dfd.resolve(true);
                });
                return dfd.promise();
            },

            transitionOut: function(view){
                var dfd = new jQuery.Deferred();
                $(view.el).fadeOut(650, function(){
                    dfd.resolve(true);
                });
                return dfd.promise();
            }



        });

    });
