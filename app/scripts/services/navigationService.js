define(['backbone', 'communicator', 'underscore'], function(Backbone, Communicator, _){
    "use strict";

    var NavigationService = function(){
        //this.queue = new createjs.LoadQueue(true);
    }

    _.extend(NavigationService.prototype, {

        /**
         * This function is the entry point for the service, and needs to initialize everything that it needs to function
         * @returns {jquery deferred promise}
         */
        start: function () {
            var dfd = new jQuery.Deferred();           ;
            dfd.resolve(this._registerHandlers());
            return dfd.promise();
        },

        /**
         * Function to stop the service.
         */
        stop: function(){
            var dfd = new jQuery.Deferred();
            this._destoryHandlers();
            dfd.resolve(true);
            return dfd.promise();
        },

        /**
         * This is the main kick off function that uses Backbone.Wreqr to listen to events, requests and commands.
         * @private
         */
        _registerHandlers: function(){
            var self = this;

            /**
             * Redirect to the path using backbone routing.
             */
            Communicator.cmds.setHandler("navigation:redirect", function(path){
                return self.redirection(path);
            });

            $(document).on('click', "a.internal", function(e){
                e.preventDefault();
                Communicator.cmds.execute("navigation:redirect", $(this).attr("href"));
            });

            return true;

        },

        _destoryHandlers: function(){

        },

        redirection: function(path){
            //consider parsing the path to catch errors.
            Backbone.history.navigate(path, true);
        }


    });


    return NavigationService;
});
