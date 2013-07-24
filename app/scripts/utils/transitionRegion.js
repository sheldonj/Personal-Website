define(['backbone', 'communicator', 'underscore'],
    function(Backbone, communicator, _){
        "use strict";

        return Backbone.Marionette.Region.extend({

            initialize: function() {
                this.loadedViews = [];
            },

            loadView: function(view, callback){

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
                    view.render();
                    $(self.el).append(view.el);

                    //if the view has it's own transition use that,
                    //else use the baked in default.
                    if(!_.isUndefined(view.transitionIn) &&_.isFunction(view.transitionIn)){
                        self.transitions.push(view.transitionIn());
                    } else{
                        self.transitions.push(self.transitionIn(view));
                    }


                 //clean up
                }).done(function () {

                    _.each(self.loadedViews, function(loadedView){
                        $(loadedView.el).unbind().remove();
                    });

                    self.loadedViews = [];
                    self.loadedViews.push(view);
                    self.currentView = view;

                    Backbone.Marionette.triggerMethod.call(view, "show");
                    Backbone.Marionette.triggerMethod.call(self, "show", view);

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
