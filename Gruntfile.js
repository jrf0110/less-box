module.exports = function( grunt ){
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');

  var config = {
    pkg: grunt.file.readJSON('package.json')

  , watch: {
      jshint: {
        // Concat jshint.all
        files: [],
        tasks: ['jshint'],
        options: { spawn: false }
      }

    , less: {
        files: [ 'less/*.less', 'less/**/*.less' ]
      , tasks: ['less']
      , options: { spawn: false }
      }
    }

  , less: {
      dev: {
        files: {
          
        }
      }
    }

  , jshint: {
      // define the files to lint
      all: ['*.js', 'js/*.js', 'js/**/*.js'],
      options: {
        ignores: ['node_modules', 'bower_components/**'],
        laxcomma: true,
        sub: true,
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    }

  , connect: {
      server: {
        options: {
          port: 8082
        }
      }
    }
  };

  config.watch.jshint.files = config.watch.jshint.files.concat(
    config.jshint.all
  );

  grunt.initConfig( config );

  grunt.registerTask( 'default', [
    'jshint'
  , 'less'
  , 'connect'
  , 'watch'
  ]);
};
