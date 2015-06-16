// Filename: views/GalleriesMenuView
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/galleriesMenuTmpl.html',
  'models/navBarModel'
 ], function($, _, Backbone, template, Model){
  var GalleriesMenuView = Backbone.View.extend({
    el: $('#my-container'),
        events:{

      "click .navLink"  : "navPushed"
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
    initialize: function () {
      var _thisView = this;
      
      this.model = new Model();
      this.model.fetch({
                
            }).done(function() {
                console.log("success");
                _thisView.render();
            }).fail(function() {
                console.log("failed to fetch model data");
            });
      
    },

     render: function(){
      // Using Underscore we can compile our template with data

var test = this.model.toJSON();
var menuItems =_.values(test);
console.log(menuItems);
var hrefs= [];
$.each( menuItems, function(  index, value  ) {
 var ahref = "#gallery/" + value;
 hrefs.push(ahref);
});


this.$el.append(_.template(template, {
"model": menuItems,
"hrefs": hrefs
}));


    }
  });
  // Our module now returns our view
  return GalleriesMenuView;
});