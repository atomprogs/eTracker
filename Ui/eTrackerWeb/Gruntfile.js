module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourceMap: true
            },
            dev: {
                files: {

                    'styles/login.app.css': 'app/login/login.app.scss',
                   // 'styles/profile.app.css': 'app/profile/profile.app.scss'
                }
                // files: [{
                //     expand: true,
                //     cwd: 'app',
                //     src: ['**/*.scss'],
                //     dest: 'styles',
                //     ext: '.css'
                // }]
            }
        },
        copy: {
            templates: {
                files: [{
                    expand: true,
                    cwd: ['app'], // Parent folder of original CSS templates
                    src: '**/*.scss', // Collects all `*.css` files within the parent folder (and its subfolders)
                    dest: 'styles/', // Stores the collected `*.css` files in your `src/css/` folder
                    filter: function (dest) { // `dest`, in this instance, is the filepath of each matched `src`
                        var cwd = this.cwd, // Configures variables (these are documented for your convenience only)
                            src = dest.replace(new RegExp('^' + cwd), '');
                        dest = grunt.task.current.data.files[0].dest;
                        return (!grunt.file.exists(dest + src)); // Copies `src` files ONLY if their destinations are unoccupied
                    }
                }]
            }
        }
    });

    // task
    grunt.registerTask('sass', ['sass']);
    // grunt.registerTask('copy', ['copy']);

    // load plugin
    grunt.loadNpmTasks('grunt-sass');
};