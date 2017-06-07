module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // concat will concatenate all javascript into one file
        concat: {
            // 2. Configuration for concatinating files goes here.
            dist: {
              src: [
                  'js/jquery-3.2.1.js', // All JS in the libs folder
                  'js/bootstrap.js'
              ],
            dest: 'js/production.js',
            }
        },

        // Uglify will min js code
        uglify: {
          build: {
            src: 'js/production.js',
            dest: 'js/production.min.js'
          }
        },

        // Image minifying
        imagemin: {
          dynamic: {
            files: [{
              expand: true,
              cwd: 'pictures/',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'pictures/build/'
            }]
          }
        },

        // Watch will auto run the tasks when files change in specified areas
        watch: {
          scripts: {
            files: ['js/*.js'],
            tasks: ['concat', 'uglify'],
            options: {
              spawn: false,
            },
          }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'watch']);

};
