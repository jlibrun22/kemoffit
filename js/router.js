// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/homeView',
  'views/galleryView',
  'views/aboutMeView',
  'views/videoGalleryView'
  ], function($, _, Backbone, HomeView, GalleryView, AboutMeView, VideoGalleryView){
  return Backbone.Router.extend({
    initialize: function(){

     this.bind('route', this.pageView);  


    },
    routes: {
      // Define some URL routes
      '': 'showHomePage',
      'gallery(/*params)': 'showGalleries',
      'aboutMe': 'showAboutMe',
      'videoGallery': 'showVideoGallery',
      // Default
      '*actions': 'defaultAction'
    },
   showHomePage: function(){
    console.log('rendering homeview');

    var homeView = new HomeView();
      homeView.render();
   } ,
   showGalleries: function(galleryURL){
    if(galleryURL){
       var galleryView = new GalleryView({gallery : galleryURL});
      }
      else{
        $.get( "getGalleries.php", function( data ) {
   console.log( "Load was performed." );
   console.log(data);
   console.log(data[0]);
      var galleryView = new GalleryView({gallery : data[0]});

          }, "json");


      }



   } ,


   showVideoGallery: function(){
    
       var videoGalleryView = new VideoGalleryView();
  

   } ,



      showAboutMe: function(){
       var aboutMeView = new AboutMeView();
      aboutMeView.render();
   } ,
pageView : function(){
  
  var url = Backbone.history.getFragment();

        // Add a slash if neccesary
        if (!/^\//.test(url)) url = '/' + url;

        // Record page view
        ga('send', {
            'hitType': 'pageview',
            'page': url
        });
    
},


  defaultAction: function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    console.log('rendering homeview');

    var homeView = new HomeView();
      homeView.render();
    }
  });


});