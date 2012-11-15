cluainin.Views.historyView = Backbone.View.extend({

  //template: history
	el: '#history',

	initialize: function(){
  		this.render();
  	},

  	render: function(){
    	window.onresize=function(){$("#viewport").css('height', window.innerHeight-60+'px');};
    	var self = this;
	    $(this.el).append("<h2>History</h2>");
	    $(this.el).append("<p>Sports, arts, fishing </p>");
	    $(this.el).append("<p>Fishing etc</p>");
	    $(".history").css('height', window.innerHeight+'px');
  	}

});
