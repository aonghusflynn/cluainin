cluainin.Views.sportView = Backbone.View.extend({
	el: '#sport',
  //template: sport
	initialize: function(){
  		this.render();
  	},

  	render: function(){
    	window.onresize=function(){$("#viewport").css('height', window.innerHeight-60+'px');};
    	var self = this;
	    $(this.el).append("<h2>Sport</h2>");
	    $(this.el).append("<p>Sports, arts, fishing </p>");
	    $(this.el).append("<p>Fishing etc</p>");
	    $(".sport").css('height', window.innerHeight+'px');
  	}
});
