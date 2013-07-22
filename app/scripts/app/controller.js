define(['backbone', 'communicator'],
    function(Backbone, Communicator) {

        'use strict';

        var MainController = Backbone.Marionette.Controller.extend({

            initialize: function(options){
                this.contentRegion = options.contentRegion;
                this.navRegion = options.navRegion;
            },

            home: function(){
                var self = this;

                self._before(function(){
                    require(['app/home/views/home'], function(HomeView) {
                        var homeView = new HomeView();
                        self.contentRegion.loadView(homeView);
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
                    self.navRegion.loadView(navView);
                });

            }


        });

       return MainController;


    });




