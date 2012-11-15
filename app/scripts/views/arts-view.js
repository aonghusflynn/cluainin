cluainin.Views.artsView = Backbone.View.extend({

	el: '#art',
  //template: sport
	initialize: function(){
  		this.render();
  	},

  	render: function(){
  		$(".art").css('height', window.innerHeight+'px');
    	window.onresize=function(){$("#viewport").css('height', window.innerHeight-60+'px');$(".art").css('height', window.innerHeight+'px');};
    	var self = this;
	    $(this.el).append("<h2>Art</h2>");
	    $(this.el).append("<p>Sports, arts, fishing </p>");
	    $(this.el).append("<p>Fishing etc</p>");
	    
  	}
  

});
