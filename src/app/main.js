require(["knockout", "logger", "knockout-amd-helpers", "knockout-router"],
    function (ko, logger) {


        var vm = {
            router: ko.router.vm,
            moduleToShow: ko.observable()
        };

        // Can attach a global subscription to be notified for all route changes.
        function notify() {
            console.log(arguments, new Date());
        }

        // Can attach a 'route not found' handler, which will be passed a url fragment and query string.
        function notFoundHandler(fragment, query) {
            toastr.logError(fragment, query, null, true);
            // we actually want to load the 404 view
        }

        // Configure routing options before defining routes
        ko.router.configure({ debug: true, notify: notify, pushState: true });

        ko.amdTemplateEngine.defaultPath = "./app/views";
        ko.amdTemplateEngine.defaultSuffix = ".html";
        ko.bindingHandlers.module.baseDir = './app/viewmodels';

        /* define routes */
        ko.router.map([
            { route: '', module: 'home', title: 'home', href: '/', nav: true },
            { route: 'sessions', module: 'sessions', title: 'sessions', href:'/sessions', nav: true },
            { route: 'validations', module: 'validations', title: 'validations', href: '/validations', nav: true },
            { route: 'about', module: 'about', title: 'about', href: '/about', nav: true }
            /*{ route: 'news/:id', module: 'news', title: 'The News' }*/
        ]).mapNotFound({ callback: notFoundHandler }); // can specify a module/template/callback/title

        // Bind the view model
        ko.applyBindings(vm);

        // Should call ko.router.init() after ko.applyBindings() when using
        // the route bindingHandler. otherwise could safely call ko.router.init()
        // once the routes have been defined.
        ko.router.init(); //calls ko.history.start() behind the scenes

});






