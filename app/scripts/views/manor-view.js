cluainin.Views.manorView = Backbone.View.extend({

  //template: manor
  el: "#about",
  initialize: function(){
  	this.render();
  },

  render: function(){
    
    window.onresize=function(){$(".about").css('height', window.innerHeight+'px');};
    var self = this;
    $(this.el).append("<h2>Why visit?</h2>");
    $(this.el).append("<p>Sports, arts, fishing </p>");
    $(this.el).append("<p>Whether it's sports, arts or just a quiet day fishing.</p>");
    $(".about").css('height', window.innerHeight+'px');
  }
});