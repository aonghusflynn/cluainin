cluainin.Routers.ApplicationRouter = Backbone.Router.extend({
	routes:{
		"" : "main",
		"sport" : "sportView"
	},
	initialize:function(){
		
	},
	main: function(){
		this.home = new cluainin.Views.manorView ();
	},
	sportView: function(){
		this.sport = new cluainin.Views.sportView();
	}

});
