cluainin.Views.historyView = Backbone.View.extend({

  //template: history
	el: '#history',

	initialize: function(){
      var self = this;
      $(this.el).empty();
      $(this.el).append("<h2>History</h2>");
      $(this.el).append("<p>Steeped in Irish history, even the name of the town is lesson in Ireland's past. Originally called Cluainin Ui Ruairc, or the little meadow of O'Rourke (the local chieftan), the area was taken from the Irish and given to Frederick Hamilton in 1622.</p>");
      $(this.el).append("<p>Here, he built his <a href='http://www.manorhamiltoncastle.ie/'>castle</a> or manor house, from where he ruled the area.</p>");
      $(this.el).append("<p>This is where the name Manorhamilton came from, but even today, the town is called Cluainin in the Irish language.</p>");
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
