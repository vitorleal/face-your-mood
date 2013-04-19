module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/* <%= pkg.name %> - Build: <%= grunt.template.today("dd-mm-yyyy") %> - Author: <%= pkg.author %> */\n'
      },
      build: {
        src: 'js/<%= pkg.name %>.js',
        dest: 'js/build/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'js/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['uglify', 'jshint']);

};
