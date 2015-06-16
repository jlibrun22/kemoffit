define([
  'jquery',
  'underscore',
  'backbone',
   'text!templates/videoGalleryTmpl.html',
  'imagesloaded',
  'views/galleryMenuView',
   'models/videoGalleryModel',
   'collagePlus',
    'removeWhitespace',
    'collageCaption',
  'jquery-mousewheel',
  'fancybox',
  'fancybox-buttons',
  'fancybox-thumbs',
  'fancybox-media'
], function($, _, Backbone, template, imagesLoaded, GalleryMenuView, Model){
  var GalleryView = Backbone.View.extend({
    el: $('#my-container'),

        events:{

      "click .videos a"  : "videoClicked"
    },

        initialize: function (options) {
      this.options = options;
      var _thisView = this;
            
      this.model = new Model();

      this.model.fetch().done(function() {
                console.log("success in the fetch model method for video gallery view");
                _thisView.render();
            }).fail(function() {
                console.log("failed to fetch model data");
            });
         
     
     
      mv.i.router.on('route:showGalleries', this.onClose(this));
     

     
      
    },
    onClose: function (theView) {
        theView.unbind();
       theView.stopListening();
        $(document).unbind('click.fb-start');
      theView.$el.empty();
   
},
    videoClicked: function (event) {
       var videoName = event.target.src;

       ga('send', 'event', 'video', 'clicked' , videoName);
   
},

     render: function(){
      // Using Underscore we can compile our template with data

        var galleryItems = this.model.attributes;
          console.log('Video Gallery Json is:' + galleryItems);
          this.$el.html(_.template(template, {

            "videos": galleryItems,
            "test":"test"
          }
                         

              )).promise().done(function(){
        

 


      imagesLoaded( '#am-container', function() {     
      collage();
      $('.Collage').collageCaption(); 



      $('#my-container .fancybox').fancybox({
        prevEffect : 'none',
        nextEffect : 'none',
        openEffect  : 'none',

        closeBtn  : false,
        arrows    : true,
        nextClick : true,

      
      });

  $(".various").fancybox({
     padding: 0 ,// remove white border
     closeBtn  : false,
    maxWidth  : 800,
    maxHeight : 500,
    fitToView : false,
    width   : '70%',
    height    : '70%',
    autoSize  : false,
    closeClick  : false,
       prevEffect : 'none',
        nextEffect : 'none',
        openEffect  : 'none',
  });




            console.log('successfully loaded template');

           $('.Collage img').fadeIn( 'slow');


          });
  
          
    


        // Here we apply the actual CollagePlus plugin
    function collage() {
        $('.Collage').removeWhitespace().collagePlus(
            {
                'fadeSpeed'     : 2000,
                'targetHeight'  : 500,
                'effect'        : 'effect-1',
                'direction'     : 'vertical',
                'allowPartialLastRow' : true
            }
        );
    };

    // This is just for the case that the browser window is resized
    var resizeTimer = null;
    $(window).bind('resize', function() {
        // hide all the images until we resize them
        $('.Collage .Image_Wrapper').css("opacity", 0);
        // set a timer to re-apply the plugin
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(collage, 200);
    });




      
      /*
       *  Button helper. Disable animations, hide close button, change title type and content
       */

      $('.fancybox-buttons').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',

        prevEffect : 'none',
        nextEffect : 'none',

        closeBtn  : false,

        helpers : {
          title : {
            type : 'inside'
          },
          buttons : {}
        },

        afterLoad : function() {
          this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
        }
      });



      /*
       *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
      */
      $('.fancybox-media')
        .attr('rel', 'media-gallery')
        .fancybox({
          openEffect : 'none',
          closeEffect : 'none',
          prevEffect : 'none',
          nextEffect : 'none',

          arrows : false,
          helpers : {
            media : {},
            buttons : {}
          }
        });

      /*
       *  Open manually
       */


      } );

       
        var galleryMenuView = new GalleryMenuView();




  
    }
  });
  // Our module now returns our view
  return GalleryView;
});



    