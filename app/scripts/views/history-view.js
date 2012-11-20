cluainin.Views.historyView = Backbone.View.extend({

  //template: history
	el: '#history',

	initialize: function(){
      var self = this;
      $(this.el).empty();
      $(this.el).append("<h2>History</h2>");
      $(this.el).append("<p>Sports, arts, fishing </p>");
      $(this.el).append("<p>Fishing etc</p>");
      $(".section").css('height', window.innerHeight+'px');
  		this.render();
  	},

  	render: function(){
      //$('#slider').animate({top: -(window.innerHeight*3+60)},1500);
      $('#history.content').addClass('move');
      $('#slider').css('top',-(window.innerHeight*3+60));
    	window.onresize=function(){$("#viewport").css('height', window.innerHeight-60+'px');$(".history").css('height', window.innerHeight+'px');};
    	return this;
  	}

});
