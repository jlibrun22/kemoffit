
define([
  'jquery',
  'underscore',
  'backbone',
   'text!templates/aboutMeTmpl.html',
     'views/galleryMenuView2',
       'models/navBarModel'
], function($, _, Backbone, template, GalleryMenuView, model){
  var AboutMeView = Backbone.View.extend({
    el: $('#my-container'),

     render: function(){
      // Using Underscore we can compile our template with data



        var galleryMenuView = new GalleryMenuView();


          this.$el.html(_.template(template));

     
    }
  });
  // Our module now returns our view
  return AboutMeView;
});