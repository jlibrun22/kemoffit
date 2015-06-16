// Filename: models/galleriesMenu
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var GalleryModel = Backbone.Model.extend({
    defaults: {
    
    },
    url: "getImages.php"
  });
  // Return the model for the module
  return GalleryModel;
});