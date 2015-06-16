define([
  'jquery',
  'underscore',
  'backbone',
   'text!templates/galleryTmpl.html',
  'imagesloaded',
  'views/galleryMenuView',
   'models/galleryModel',
   'models/thumbnailModel',
   'collagePlus',
    'removeWhitespace',
    'collageCaption',
 'jquery-mousewheel',
  'fancybox',
  'fancybox-buttons',
  'fancybox-thumbs',
  'fancybox-media'
], function($, _, Backbone, template, imagesLoaded, GalleryMenuView, Model, Model2){
  var GalleryView = Backbone.View.extend({
    el: $('#my-container'),

        initialize: function (options) {
            

          $('#loading').show();
           this.options = options;
      var _thisView = this;
            _thisView.thumbnailData = {};
      _thisView.model = new Model();

      _thisView.thumbnailData = new Model2();
      console.log('fetching thumbnail data with this link: ' + this.options.gallery);
        var thumbnailGallery = _thisView.options.gallery + 'Thumbnails';
      _thisView.thumbnailData.fetch({ data: { gallery:thumbnailGallery}}).done(function() {
                console.log("success in fetch thumbnail image links from gallery view");
          console.log('fetching with this link: ' + _thisView.options.gallery);
      _thisView.model.fetch({ data: { gallery: _thisView.options.gallery}}).done(function() {
                console.log("success in fetch full image links from gallery view");

                _thisView.render();
            }).fail(function() {
                console.log("failed to fetch model data");
            });
         
            }).fail(function() {
                console.log("failed to fetch model data for thumbnails");
            });
         

      
     
     
      mv.i.router.on('route:showGalleries', this.onClose(this));
     

     
      
    }, 
    events:{

      "click .pictures a"  : "imageClicked"
    },


    imageClicked: function (event) {
       var imageName = event.target.src;

       ga('send', 'event', 'image', 'clicked' , imageName);
   
},
    onClose: function (theView) {
        theView.unbind();
       theView.stopListening();
        $(document).unbind('click.fb-start');
      theView.$el.empty();
   
},

     render: function(){
      // Using Underscore we can compile our template with data

          console.log('About to render gallery at this link:' + this.options.gallery);
          var galleryImagesData = this.model.toJSON();
          var thumbnailImagesData = this.thumbnailData.toJSON();
        var galleryItems =_.values(galleryImagesData);
         var thumbnailItems =_.values(thumbnailImagesData);
          

          console.log('the thumbnail links are this:' + thumbnailItems);
                    console.log('the gallery links are this:' + galleryItems);

          var myModel = [];
        for (i = 0; i < galleryItems.length; i++) { 
          console.log('iteration: '  + i);
             myModel.push({
        galleryItem: galleryItems[i],
        thumbnailItem: thumbnailItems[i]
    });

         /*  myModel[i].galleryItem= galleryItems[i];
          myModel[i].thumbnailItem= thumbnailItems[i];*/

          }




          this.$el.html(_.template(template, {
          "model": myModel
             

              })).promise().done(function(){
        

 


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

            console.log('successfully loaded template');

           $('.Collage img').fadeIn( 'slow');

           $('#loading').hide();
          });
  
          
    


        // Here we apply the actual CollagePlus plugin
    function collage() {

if(window.mobilecheck()){

$('.Collage').removeWhitespace().collagePlus(
            {
                'fadeSpeed'     : 2000,
                'targetHeight'  : 200,
                'effect'        : 'effect-1',
                'direction'     : 'vertical',
                'allowPartialLastRow' : true
            }
        );


}
else{
        $('.Collage').removeWhitespace().collagePlus(
            {
                'fadeSpeed'     : 2000,
                'targetHeight'  : 500,
                'effect'        : 'effect-1',
                'direction'     : 'vertical',
                'allowPartialLastRow' : true
            }
        );

      }
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



    