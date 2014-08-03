module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /*uglify: {
            options: {
                banner: '*//*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> *//*\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },*/
        bowercopy: {
            options: {
                srcPrefix: 'bower_components'
            },
            scripts: {
                options: {
                    destPrefix: ''
                },
                files: {
                    'js/jquery.js': 'jquery/dist/jquery.min.js',
                    'js/knockout.js': 'knockoutjs/dist/knockout.js',
                    'js/knockout-amd-helpers.js': 'knockout-amd-helpers/build/knockout-amd-helpers.js',
                    'js/bootstrap.js': 'bootstrap/dist/js/bootstrap.js',
                    'js/require.js': 'requirejs/require.js',
                    'js/toastr.js': 'toastr/toastr.js',
                    'js/moment.js': 'moment/moment.js',
                    'css/bootstrap.css': 'bootstrap/dist/css/bootstrap.css',
                    'css/toastr.css': 'toastr/toastr.css',
                    'fonts/glyphicons-halflings-regular.eot': 'bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
                    'fonts/glyphicons-halflings-regular.svg': 'bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
                    'fonts/glyphicons-halflings-regular.ttf': 'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
                    'fonts/glyphicons-halflings-regular.woff': 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    //grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-bowercopy');
    // Default task(s).
    grunt.registerTask('default', ['bowercopy']);//, ['uglify']);

};
