cluainin.Views.manorView = Backbone.View.extend({

  //template: manor
  contentSet:false,
  el: "#about",
  initialize: function(aboutSet){
    var self = this;
    if(!aboutSet){
      $(this.el).append("<h2>Why visit?</h2>");
      $(this.el).append("<p>Sports, arts, fishing </p>");
      $(this.el).append("<p>Whether it's sports, arts or just a quiet day fishing.</p>");
      $(".about").css('height', window.innerHeight+'px');
      aboutSet = true;
    }
  	this.render();
  },

  render: function(){
    $('#slider').animate({top: -60});
    window.onresize=function(){$("#viewport").css('height', window.innerHeight-60+'px');};
    return this;
  }
});