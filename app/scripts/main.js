
window.cluainin = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
  	this.router = new cluainin.Routers.ApplicationRouter();
    console.log('Hello from Backbone!');
    Backbone.history.start();
  }
};

$(document).ready(function(){
  cluainin.init();
});
