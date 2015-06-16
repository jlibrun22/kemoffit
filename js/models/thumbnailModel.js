// Filename: models/galleriesMenu
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var Thumbnailmodel = Backbone.Model.extend({
    defaults: {
    
    },
    url: "getThumbnails.php"
  });
  // Return the model for the module
  return Thumbnailmodel;
});