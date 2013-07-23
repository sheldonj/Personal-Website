define(['communicator', 'underscore'], function(Communicator, _){
    "use strict";

    var PreloaderService = function(){
        //this.queue = new createjs.LoadQueue(true);
    }

    _.extend(PreloaderService.prototype, {

        /**
         * This function is the entry point for the service, and needs to initialize everything that it needs to function
         * @returns {jquery deferred promise}
         */
        start: function () {
            console.log('preloader start');
            var dfd = new jQuery.Deferred();           ;
            dfd.resolve(this._registerHandlers());
            return dfd.promise();
        },

        /**
         * Function to stop the service.
         */
        stop: function(){
            console.log('stopping preloader...')
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

            console.log('registering preloader handlers');

            /**
             * Preload a single image.
             */
            Communicator.cmds.setHandler('preload:image', function(image, options){
                console.log('preload image');
                self.preloadImage(image, options);
            });

            /**
             * Preload an array of images references.
             */
            Communicator.cmds.setHandler('preload:manifest', function(manifest, options){
                self.preloadManifest(manifest, options);
            });

            /**
             * Preload all images that are used with in a css style sheet.
             * Needs to pass in a reference to a stylesheet manfiest. This is a file that generated from a style sheet that
             * lists all images used in all selections (one image per line).
             * Unix grep command to create manfifest:
             * grep -o '\/images\/[a-zA-Z0-9/.:_-]*' site.css > images.txt
             */
            Communicator.cmds.setHandler('preload:styleSheetImages', function(styleSheetManifest, options){
                self.preloadStylesheetImages(styleSheetManifest, options);
            });

            return true;

        },

        _destoryHandlers: function(){
            console.log('removing handlers');
//           Communicator.cmds.removeHandler('preload:image') ;
//           Communicator.cmds.removeHandler('preload:manifest') ;
//           Communicator.cmds.removeHandler('preload:styleSheetImages') ;
        },

        /**
         * Preloads a single image.
         * @param image -  The image to preload.
         * @param options - Options hash, mostly containing callback functions.
         */
        preloadImage: function(image, options){

            console.log('PRELOADING IMAGE!!!')

            //check for required image to preload.
            if(_.isUndefined(image) || _.isEmpty(image) || _.isNull(image)){return;}

            //create defaults if they dont exist.
            options = options || {};
            var cfg = _.defaults(options, this.createDefaults());

            //create a promise for each image that needs to be loaded,
            //resolve promise once the image has loaded.
            var promise ;
            (function(url, promise){
                var img = new Image();
                img.onload = function(){
                    //call the single item loaded callback.
                    options.onLoad(url);
                    promise.resolve();
                };
                img.src = url;
            })(image, promise = $.Deferred());

            //handle success or fail callbacks.
            promise.done(function(){
                cfg.success();
            }).fail(function(){
                cfg.fail();
            });
        },

        /**
         * Preload an array of images.
         * @param manifest - Array of images
         * @param options  - Options hash - callbacks.
         */
        preloadManifest: function(manifest, options){

            var self = this;

            //create defaults if they dont exist.
            options = options || {};
            var cfg = _.defaults(options, self.createDefaults());

            //check for required manifest to preload.
            if(_.isUndefined(manifest) || _.isEmpty(manifest) || _.isNull(manifest)){
                //no images to load, so just pass.
                cfg.success();
                return;
            }

            var preload = manifest;
            var promises = [];
            for (var i = 0; i < preload.length; i++) {

                var url =  preload[i];
                if(self.validImage(url) == true){
                    (function(url, promise) {
                        var img = new Image();
                        img.onload = function() {
                            //call the single item loaded callback.
                            options.onLoad(url);
                            promise.resolve();
                        };
                        img.src = url;
                    })(url, promises[i] = $.Deferred());
                } else{

                }

            }
            $.when.apply($, promises).done(function() {
                cfg.success();
            }).fail(function(){
                cfg.fail();
            });


        },

        /**
         * Preload a stylesheet manifest
         * @param Path to external image manifest. .txt file of images generated by grep statment.
         * @param options
         */
        preloadStylesheetImages: function(styleSheetManifest, options){

            //silently exit if there is no stylesheet manifest.
            if(_.isUndefined(styleSheetManifest) || _.isEmpty(styleSheetManifest)){return;}

            var self = this;

            //grap manifest with ajax
            $.get(styleSheetManifest, function(data){
                var manifest = data.split(/\r?\n/);
                self.preloadManifest(manifest, options);
            });

        },

        /**
         * Create default options for all preloader services.
         * @param name
         * @returns {}
         */
        createDefaults: function(){
           return {
               success: function(){},
               fail: function(){},
               onLoad: function(){}
           };
        },

        /**
         * Validates image extensions.
         * @param name
         * @returns {*}
         */
        validImage: function(name){
            var validExtensions = ['.jpg', '.jpeg', '.gif', '.png'];
            var ext = name.match(/\.(png|jpg|jpeg|gif)$/);
            if(_.isNull(ext)|| _.isUndefined(ext[0]) || _.isNull(ext[0]) || ext[0].length < 1){ return false;}
            var isValid =  _.contains(validExtensions, ext[0].toString().toLowerCase());

            return  isValid
        }

    });


return PreloaderService;
});
