module.exports = function(grunt) {

  grunt.initConfig({

    postcss: {

      options: {
        processors: [
          require('postcss-import')(),
          require('css-mqpacker')(),
          require('cssnano')({
            calc: {precision: 2}
          })
        ]
      },
      dist: {
        src: 'src/style.css',
        dest: 'dest/style.css'
      }

    }
 
  });

  grunt.loadNpmTasks('grunt-postcss');

};