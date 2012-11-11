cluainin.Routers.ApplicationRouter = Backbone.Router.extend({
	routes:{
		"" : "main"
	},
	initialize:function(){
		
	},
	main: function(){
		this.home = new cluainin.Views.manorView ();
	}
});
