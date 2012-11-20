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
      $(".section").css('height', window.innerHeight+'px');
      $('#slider').css('top',-(window.innerHeight*4+60));
  		
  		this.render();

    },

    render: function(){
      //$('#slider').animate({top: -(window.innerHeight+60)},1500);
		var myLatlng = new google.maps.LatLng(54.304501, -8.176763);
        var mapOptions = {
          zoom: 10,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Manorhamilton'
        });
      
      //$('#where.content').addClass('move');
      window.onresize=function(){
        $("#viewport").css('height', window.innerHeight-60+'px');
        $(".where").css('height', window.innerHeight+'px');
      };
    
    	return this;
  	}
});
