// Filename: views/project/list
define([
  'jquery',
  'underscore',
  'backbone',
    'text!templates/homeTmpl.html',
      'models/homeModel',
      'imagesloaded',
      'hammer',
   'easing', 
  'animate-enhanced',
  'superslides'
], function($, _, Backbone, template, Model, imagesLoaded, hammer){
  var HomeView = Backbone.View.extend({
    el: $('#my-container'),
        events:{

      "click .navLink"  : "navPushed"
    },
    initialize: function () {
           
          $('#loading').show();
      var _thisView = this;
            
      this.model = new Model();

      console.log('fetching home slider images');
      this.model.fetch().done(function() {
                console.log("success in the fetch model method for gallery view");
                _thisView.render();
            }).fail(function() {
                console.log("failed to fetch model data");
            });
         

     

     
      
    },

    navPushed: function(event){

      console.log("navlink clicked");
  /*       this.$el.empty();*/
      var target =  $(event.target);
      if(target.is('a')){
        
      var location = $(event.target).attr('link');
        
        mv.i.router.navigate(location, {trigger: true});
  
      }
  
      else{
        var location = target.children().attr('link');
        
        mv.i.router.navigate(location, {trigger: true});  
        
      }


    },
     render: function(){
      // Using Underscore we can compile our template with data

      console.log('About to render gallery for homepage');
          var test = this.model.toJSON();
        var menuItems =_.values(test);
          console.log('the images are this:' + menuItems);
          if(menuItems.length>0){
          this.$el.html(_.template(template, {
              "model": menuItems
              }));
         imagesLoaded( '#am-container', function() { 

 $('#slides').superslides({
        hashchange: false,
        play: 5000
      }).promise().done(function(){



if(window.mobilecheck()){



  $('.slides-navigation a').hide();
  $('.banner').css('bottom','0px');
  $('.slides-pagination').css('bottom', '0px');

/*
 $('#slides').hammer().on('swipeleft', function(e) {
    $(this).superslides('animate', 'next');
  });
  
  $('#slides').hammer().on('swiperight', function() {
    $(this).superslides('animate', 'prev');
  });*/
}




      });

    
          $('#loading').hide();
      $('.slides-pagination').unbind('mouseenter').unbind('mouseleave');
});







  }










    }
  });
  // Our module now returns our view
  return HomeView;
});