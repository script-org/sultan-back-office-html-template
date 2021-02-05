module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: ['dist/*'],
            tmp : ['.tmp','**/.DS_store']
        },
        copy: {
            modules:{
                files: [
                    {expand: true, cwd: 'node_modules', src: '<%= pkg.copy %>', dest: 'libs'}
                ]
            },
            dist: {
                files: [
                    {expand: true, cwd: 'html/', src: ['**'], dest: 'dist/html/'},
                    {expand: true, cwd: 'docs/', src: '**', dest: 'dist/docs/'},
                    {expand: true, cwd: 'libs/', src: '**', dest: 'dist/libs/'}
                ]
            },
            assets: {
                files: [
                    {expand: true, cwd: 'assets/', src: ['**', '!**/scss/**'], dest: 'dist/assets/'}
                ]
            }
        },
        watch: {
            sass: {
              files: ['assets/scss/*.scss'],
              tasks: ['sass'],
            }
        },
        sass: {
            dist: {
                files: [
                    {'assets/css/theme.css': ['assets/scss/theme.scss']},
                    {'assets/css/rtl.css': ['assets/scss/rtl.scss']},
                    {'assets/css/i-con.css': ['assets/scss/i-con.scss']},
                    {'assets/css/bootstrap.css': ['assets/scss/bootstrap.scss']}
                ]
            }
        },
        htmlmin: {
            dist: {
                options: { removeComments: true, collapseWhitespace: true },
                files: [
                    { expand: true, cwd: 'dist/html/', src: ['*.html', '**/*.html'], dest: 'dist/html/' }
                ]
            }
        },
        htmlhint: {
            options: {
              'tag-pair': true
            },
            src: ['html/*.html']
        },
        useminPrepare: {
            html: ['html/*.html'],
            options: {
              dest: 'dist'
            }
        },
        usemin: {
            html: ['dist/html/*.html', 'dist/docs/*.html']
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('build:sass', [
        'sass'
    ]);

    grunt.registerTask('copy:libs', [
        'copy:modules'
    ]);

    grunt.registerTask('build:dist', [
        'clean:dist',
        'copy',
        'sass',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'usemin',
        'htmlmin',
        'copy:assets',
        'clean:tmp'
    ]);

};
