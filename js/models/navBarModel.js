// Filename: models/galleriesMenu
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var NavBarModel = Backbone.Model.extend({
    defaults: {
    
    },
    url: "getGalleries.php"
  });
  // Return the model for the module
  return NavBarModel;
});