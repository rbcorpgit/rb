'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Showcase = new Module('showcase');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Showcase.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Showcase.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Showcase.menus.add({
    title: 'showcase example page',
    link: 'showcase example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Showcase.aggregateAsset('css', 'showcase.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Showcase.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Showcase.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Showcase.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Showcase;
});
