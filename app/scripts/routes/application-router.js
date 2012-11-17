cluainin.Routers.ApplicationRouter = Backbone.Router.extend({
	routes:{
		"" : "main",
		"sport" 	: "sportView",
		"art"		: "artView",
		"history"	: "historyView",
		"where"		: "whereView", 
	},
	initialize:function(){
		
	},
	main: function(){
		this.home = new cluainin.Views.manorView ();
	},
	sportView: function(){
		this.sport = new cluainin.Views.sportView();
	},
	artView: function(){
		this.art = new cluainin.Views.artsView();
	},
	historyView: function(){
		this.history = new cluainin.Views.historyView();
	},
	whereView: function(){
		this.where = new cluainin.Views.whereView();
	}

});
