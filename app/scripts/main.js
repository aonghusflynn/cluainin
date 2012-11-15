
window.cluainin = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
  	this.router = new cluainin.Routers.ApplicationRouter();
    console.log('Hello from Backbone!');
    $("#viewport").css('height', window.innerHeight-60+'px');
    $(document).click(function(){
      var offset = $('#slider').offset();
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  cluainin.init();
});
