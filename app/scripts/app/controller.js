define(['backbone', 'communicator'],
    function(Backbone, Communicator) {

        'use strict';

        var MainController = Backbone.Marionette.Controller.extend({

            initialize: function(options){
                this.options = options;
                this.contentRegion = options.contentRegion;
                this.navRegion = options.navRegion;

            },

            home: function(){
                var self = this;

                self._before(function(){
                    //create home subroutes/controller
                    require(['app/home/router', 'app/home/controller'], function(HomeRouter, Controller) {
                        var controller = new Controller(self.options)
                        new HomeRouter("home", {
                            controller: controller
                        });
                        controller.about();
                    });
                });

            },

            about: function(){
                var self = this;
                self._before(function(){
                    require(['app/about/views/about'], function(AboutView) {
                        var aboutView = new AboutView();
                        self.contentRegion.loadView(aboutView);
                    });
                });
            },

            skills: function(){
                var self = this;
                self._before(function(){
                    require(['app/skills/views/skills'], function(SkillsView) {
                        var skillsView = new SkillsView();
                        self.contentRegion.loadView(skillsView);
                    });
                });
            },

            work: function(){
                var self = this;
                self._before(function(){
                    require(['app/work/views/work'], function(WorkView) {
                        var workView = new WorkView();
                        self.contentRegion.loadView(workView);
                    });
                });
            },

            play: function(){
                var self = this;
                self._before(function(){
                    require(['app/play/views/play'], function(PlayView) {
                        var playView = new PlayView();
                        self.contentRegion.loadView(playView);
                    });
                });
            },

            contact: function(){
                var self = this;
                self._before(function(){
                    require(['app/contact/views/contact'], function(ContactView) {
                        var contactView = new ContactView();
                        self.contentRegion.loadView(contactView);
                    });
                });
            },

            _before: function(callback){
                var self = this;
                self._ensureNav();
                callback();
            },

            _ensureNav: function(){
                var self = this;

               //Load Navigation Here.
                require(['app/nav/views/nav'], function(NavView) {
                    var navView = new NavView();
                    self.navRegion.show(navView);
                });

            }


        });

       return MainController;


    });




