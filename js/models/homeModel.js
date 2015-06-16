define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var HomeModel = Backbone.Model.extend({
    defaults: {
    
    },
    url: "getHomeGallery.php"
  });
  // Return the model for the module
  return HomeModel;
});