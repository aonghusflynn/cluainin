cluainin.Views.manorView = Backbone.View.extend({

  //template: manor
  el: "#about",
  initialize: function(){
  	this.render();
  },

  render: function(){
    var self = this;
    $(this.el).append("<h2>Why?</h2>");
    $(this.el).append("<p>Manorhamilton is a great place.</p>");
    $("#about").css('height', window.innerHeight-82+'px');
  }
});