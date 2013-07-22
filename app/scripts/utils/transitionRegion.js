define(['backbone', 'communicator', 'underscore'],
    function(Backbone, communicator, _){
        "use strict";

        return Backbone.Marionette.Region.extend({

            initialize: function() {
                this.loadedViews = [];
            },

            loadView: function(view){
               this.show(view);
            }



        });

    });
