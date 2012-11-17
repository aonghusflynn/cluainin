cluainin.Views.artsView = Backbone.View.extend({

	el: '#art',
  //template: sport
	initialize: function(){
      var self = this;
      $(this.el).empty();
      $(this.el).append("<h2>Art</h2>");
      $(this.el).append("<p>Sports, arts, fishing </p>");
      $(this.el).append("<p>Fishing etc</p>");
      $(".art").css('height', window.innerHeight+'px');
  		this.render();
  	},

  	render: function(){
  	//	$('#slider').animate({top: -(window.innerHeight*2+60)},1500);
      $('#art.content').addClass('move');
      $('#slider').css('top',-(window.innerHeight*2+60));
    	window.onresize=function(){$("#viewport").css('height', window.innerHeight-60+'px');$(".art").css('height', window.innerHeight+'px');}; 
      return this;
  	}
});
