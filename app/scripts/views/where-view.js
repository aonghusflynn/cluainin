cluainin.Views.whereView = Backbone.View.extend({
	el: '#where',
  //template: sport
	  initialize: function(){
      var self = this;

      $(this.el).empty();
//      $(this.el).append("<h2>Where</h2>");
//      $(this.el).append("<p>Sports, arts, fishing </p>");
//      $(this.el).append("<p>Fishing etc</p>");
      $(".where").append("<div id='map'></div>");
      $(".where").css('height', window.innerHeight+'px');
      $('#slider').css('top',-(window.innerHeight*4+60));
  		
  		this.render();

    },

    render: function(){
      //$('#slider').animate({top: -(window.innerHeight+60)},1500);
		var mapOptions = {
          center: new google.maps.LatLng(54.304501, -8.176763),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
      var gMap = new google.maps.Map(document.getElementById("map"),
            mapOptions);
      //debugger;
      $('#where.content').addClass('move');
      window.onresize=function(){
        $("#viewport").css('height', window.innerHeight-60+'px');
        $(".where").css('height', window.innerHeight+'px');
      };
    	return this;
  	}
});
