define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var VideoGalleryModel = Backbone.Model.extend({
    defaults: {
    
    },
    url: "videos.json"
  });
  // Return the model for the module
  return VideoGalleryModel;
});