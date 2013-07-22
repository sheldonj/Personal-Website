(function() {
	'use strict';

	var root = this;

	root.define([
		'backbone',
		'backbone.marionette'
	],
	function( Backbone ) {

		var Communicator = Backbone.Marionette.Controller.extend({
			initialize: function( options ) {
				console.log("initialize a Communicator");

				// create a pub sub
				this.vent = new Backbone.Wreqr.EventAggregator();

				//create a req/res
				this.reqres = new Backbone.Wreqr.RequestResponse();

				// create commands
				this.cmds = new Backbone.Wreqr.Commands();
			}
		});

		return new Communicator();
	});
}).call( this );