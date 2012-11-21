cluainin.Views.sportView = Backbone.View.extend({
	el: '#sport',
  //template: sport
	  initialize: function(){
      var self = this;
      $(this.el).empty();
      $(this.el).append("<h2>Sport</h2>");
      $(this.el).append("<p>Situated in the North West of Ireland, Manorhamilton is an ideal location for your spotring holiday.</p>");
      $(this.el).append("<p>Whether it's fishing for the <a href='http://en.wikipedia.org/wiki/Gillaroo'>Gillaroo</a> in Lough Melvin, a round of golf in <a href='http://www.donegalcottageholidays.com/blog/ballyliffin/north-west-irelandeuropean-golf-destination-of-the-year-2011/1337/'>2011's best golfing location in Europe</a>, Manorhamilton is where you should be based.</p>");
      $(this.el).append("<p>Looing for something a bit more active? Manorhamilton is a short drive from some of the best surfing on the west coast of Ireland.</p>");
      $(".section").css('height', window.innerHeight+'px');
      $('#slider').css('top',-(window.innerHeight+60));
  		this.render();
    },

    render: function(){
      //$('#slider').animate({top: -(window.innerHeight+60)},1500);
      
      $('#sport.content').addClass('move');
      window.onresize=function(){
        $("#viewport").css('height', window.innerHeight-60+'px');
        $(".sport").css('height', window.innerHeight+'px');
      };
    	return this;
  	}
});
