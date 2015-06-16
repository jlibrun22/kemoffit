// Filename: views/project/list
define([
  'jquery',
  'underscore',
  'backbone',
   'text!templates/galleryTmpl.html',
  'imagesloaded',
  'views/galleryMenuView',
   'models/galleryModel',
 /* 'montage',*/
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

        initialize: function (options) {
           this.options = options;
      var _thisView = this;
            
      this.model = new Model();

      console.log('fetching with this link: ' + this.options.gallery);
      this.model.fetch({ data: { gallery: _thisView.options.gallery}}).done(function() {
                console.log("success in the fetch model method for gallery view");
                _thisView.render();
            }).fail(function() {
                console.log("failed to fetch model data");
            });
         
  

     
      
    },

     render: function(){
      // Using Underscore we can compile our template with data

          console.log('About to render gallery at this link:' + this.options.gallery);
          var test = this.model.toJSON();
        var menuItems =_.values(test);
          console.log('the images are this:' + menuItems);
          this.$el.html(_.template(template, {
              "model": menuItems
              })).promise().done(function(){
        

 


 imagesLoaded( '#am-container', function() {     
           collage();
            $('.Collage').collageCaption(); 

      $('.fancybox').fancybox({
        prevEffect : 'none',
        nextEffect : 'none',
        openEffect  : 'none',

        closeBtn  : false,
        arrows    : true,
        nextClick : true,

      
      });

            console.log('successfully loaded template');

           $('.Collage img').fadeIn( 'slow');
/* var $container  = $('#am-container'),
          $imgs   = $container.find('img'),
          totalImgs = $imgs.length,
          cnt     = 0;
        
        $imgs.each(function(i) {
          var $img  = $(this);
          $('<img/>').load(function() {
            ++cnt;
            if( cnt === totalImgs ) {
              $imgs.show();
              $container.montage({
             
                fixedHeight : 400,
                fillLastRow : false,
                margin : 5
              });
              
              }
          }).attr('src',$img.attr('src'));
        }); 
*/
/*
       *  Simple image gallery. Uses default settings
       */

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



    