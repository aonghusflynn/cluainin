cluainin.Views.manorView = Backbone.View.extend({
  //template: manor
  el: "#about",
  initialize: function(){
    var self = this;
    $(this.el).empty();
    $(this.el).append("<h2>Why visit?</h2>");
    $(this.el).append("<p>Sports, arts, fishing </p>");
    $(this.el).append("<p>Whether it's sports, arts or just a quiet day fishing.</p>");
    $(".about").css('height', window.innerHeight+'px');
  	this.render();
  },

  render: function(){
    $('#slider').animate({top: -60}, 1500);
    window.onresize=function(){$("#viewport").css('height', window.innerHeight-60+'px');$(".about").css('height', window.innerHeight+'px');};
    return this;
  }
});