

// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: '',
    paths: {
        'app': './app',
        'logger': './app/services/logger',
        'jQuery': 'js/jquery',
        'knockout': 'js/knockout',
        'knockout-amd-helpers': 'js/knockout-amd-helpers',
        'knockout-history': 'js/knockout-history',
        'knockout-router': 'js/knockout-router',

        'text': 'js/text',
        'toastr': 'js/toastr',
        'bootstrap': 'js/bootstrap'
    },
    shim: {
        'knockout-amd-helpers': {
            deps: ['knockout']
        },
        'knockout-history': {
            deps: ['knockout']
        },
        'knockout-router': {
            deps: ['knockout', 'knockout-history', 'knockout-amd-helpers', 'jQuery']
        }
    }
});

//define('jquery', function () { return jQuery; });
//define('logger', logger);

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);