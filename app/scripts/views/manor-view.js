cluainin.Views.manorView = Backbone.View.extend({
  //template: manor
  el: "#about",
  initialize: function(){
    var self = this;
    
    $(this.el).empty();
    $(this.el).append("<h2>Why visit?</h2>");
    $(this.el).append("<p>Manorhamilton is at the meeting point of the North Leitrim glens in the Northwest of Ireland.</p>");
    $(this.el).append("<p>Whether it's a quiet walk in some of Ireland's most beautiful scenary, a round of golf in some of the world's best golf courses or surfing some of the best breaks in the world, Manorhamilton is at the centre of it all.</p>");
    $(".about").css('height', window.innerHeight+'px');

  	this.render();
  },

  render: function(){
    $('#about.content').addClass('move');
    window.onresize=function(){$("#viewport").css('height', window.innerHeight-60+'px');$(".about").css('height', window.innerHeight+'px');};
    return this;
  }
});