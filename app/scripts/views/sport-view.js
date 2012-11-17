cluainin.Views.sportView = Backbone.View.extend({
	el: '#sport',
  //template: sport
	  initialize: function(){
      var self = this;
      $(this.el).empty();
      $(this.el).append("<h2>Sport</h2>");
      $(this.el).append("<p>Sports, arts, fishing </p>");
      $(this.el).append("<p>Fishing etc</p>");
      $(".sport").css('height', window.innerHeight+'px');
      $('#slider').css('top',-(window.innerHeight+60));
  		this.render();
    },

    render: function(){
      //$('#slider').animate({top: -(window.innerHeight+60)},1500);
      
      $('#sport.content').addClass('move');
      window.onresize=function(){$("#viewport").css('height', window.innerHeight-60+'px');$(".sport").css('height', window.innerHeight+'px');};
    	return this;
  	}
});
