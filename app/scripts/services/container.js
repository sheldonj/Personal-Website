define(['communicator', 'underscore'], function(Communicator, _){
    "use strict";

   var ServiceContainer = function(options){

       this.options = _.defaults(options, {
           autoStart: true,
           name: 'GenericServiceContainer',
           services: [],
           started: function(){},
           stopped: function(){}
       });

       this.init();

   }

    _.extend(ServiceContainer.prototype, {

        init: function(){
            var self = this;
            self.running = false;

            //setup vent/command/request handlers
            self._createHandlers();

            if(self.options.autoStart){
              self.start();
            }
        },

        /**
         * Create all event, command and request handlers.
         */
        _createHandlers: function(){
            var self = this;

            //command to start services.
            var startEventName =  'serviceContainer:' + self.options.name + ':start';
            Communicator.cmds.setHandler(startEventName, function(){
                self.start();
            });

            //command to stop services.
            var stopEventName =  'serviceContainer:' + self.options.name + ':stop';
            Communicator.cmds.setHandler(stopEventName, function(){

                self.stop();
            });

        },

        /**
         * Start all services attached to the container.
         */
        start: function () {
            var self = this;

            //Don't start the services if they are already running.
            if(self.running){
                console.warn('Trying to start a service container that is already running');
                return;
            }

            self.startMethods = [];
            //add the service methods to the manifest
            _.each(self.options.services, function(service){
                self.startMethods.push(service.start());
            });

            $.when.apply($, this.startMethods).done(function () {
                console.log('container started');
                self.running = true;
                Communicator.vent.trigger("serviceContainer:started", self);
                self.options.started();
            });

        },

        /**
         * Stop all services attached to the container.
         */
        stop: function(){
            var self = this;

            //Don't start the services if they are already running.
            if(self.running == false){
                console.warn('Trying to stop a service container that is isn\'t running');
                return;
            }

            self.stopMethods = [];
            //add the service methods to the manifest
            _.each(self.options.services, function(service){
                  self.stopMethods.push(service.stop());
            });


            $.when.apply($, this.stopMethods).done(function () {
                self.running = false;
                Communicator.vent.trigger("serviceContainer:stopped", self);
                self.options.stopped();
            });

            console.log('service container stop');

        }

    });

    return ServiceContainer;

});
