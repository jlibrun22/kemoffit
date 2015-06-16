require.config({
  paths: {
    templates: '../templates',
    jquery: 'libs/jquery/jquery-1.10.1.min',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    'backbone-analytics': 'libs/backbone/backbone.analytics',
    bootstrap: 'libs/fancybox/bootstrap/js/bootstrap',
    easing:    'libs/superslides/jquery.easing.1.3', 
    hammer: 'libs/hammer/hammer-min',
  'animate-enhanced' : 'libs/superslides/jquery.animate-enhanced.min',
  superslides: 'libs/superslides/jquery.superslides',
  'jquery-mousewheel': 'libs/jquery/jquery.mousewheel-3.0.6.pack',
  fancybox: 'libs/fancybox/jquery.fancybox',
  'fancybox-buttons': 'libs/fancybox/helpers/jquery.fancybox-buttons',
  'fancybox-thumbs': 'libs/fancybox/helpers/jquery.fancybox-thumbs',
  'fancybox-media': 'libs/fancybox/helpers/jquery.fancybox-media',
  montage : 'libs/montage/jquery.montage',
    collagePlus: 'libs/collagePlus/jquery.collagePlus',
    removeWhitespace: 'libs/collagePlus/jquery.removeWhitespace',
    collageCaption: 'libs/collagePlus/jquery.collageCaption',
    imagesloaded: 'libs/imagesloaded/imagesloaded.pkgd'
  },
   shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'backbone-analytics': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'backbone']
        },
        'underscore': {
            exports: '_'
        },
        'collagePlus': {
            deps: ['jquery']
        },
         'removeWhitespace': {
            deps: ['jquery']
        },
          'collageCaption': {
            deps: ['jquery']
        },
        'fancybox': {
            deps: ['jquery']
        },
          'bootstrap': {
            deps: ['fancybox']
        },
          'fancybox-buttons': {
            deps: ['fancybox']
        },
          'fancybox-thumbs': {
            deps: ['fancybox']
        },
          'fancybox-media': {
            deps: ['fancybox']
        },
          'imagesloaded': {
            deps: ['jquery']
        }
    }

});

require([

  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});


