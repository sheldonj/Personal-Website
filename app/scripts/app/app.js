
define(
    ['backbone', 'communicator', 'services/container','services/preloaderService', 'services/navigationService', 'utils/transitionRegion'],

    function(Backbone, Communicator, ServiceContainer, PreloaderService, NavigationService, TransitionRegion){
        "use strict";

        var App = new Backbone.Marionette.Application();

        //Application Regions
        App.addRegions({
            main: {
                selector: '#wrapper',
                regionType: TransitionRegion
            },
            nav: {
                selector: '#nav',
                regionType: TransitionRegion
            }

        });

        //Application Initializer - Load critical features here.
        App.addInitializer(function(){

            //Load the preloader service.
            App.services = new ServiceContainer({
                name: 'ApplicationServices',
                autoStart: true,
                services: [new PreloaderService(), new NavigationService()],

                started: function(){

                    //Load Preloader UI:
                    require(['app/preloader/views/preloader'],function(PreloaderView) {
                        var preloaderView = new PreloaderView();
                        App.main.loadView(preloaderView);
                    });

                    //Preload Assets
                    var images = [];

                    //Show the main layout after everything is loaded.
                    Communicator.cmds.execute('preload:manifest', images, {
                        success: function(){

                            require(['app/controller', 'app/router'], function(Controller, Router) {

                                new Router({ controller : new Controller({
                                    contentRegion: App.main,
                                    navRegion: App.nav
                                })});

                                if (Backbone.history){
                                    Backbone.history.start({pushState: true});
                                }

                            });

                        }
                    })

                }

            });

        });

        return App;

    }
);
