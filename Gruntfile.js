module.exports = function(grunt) {
    // Konfigurasi Grunt
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      jshint: {
        all: ['Gruntfile.js', 'src/**/*.js']
      }
    });
  
    // Daftarkan tugas Grunt
    grunt.loadNpmTasks('grunt-contrib-jshint');
  
    // Definisikan tugas default
    grunt.registerTask('default', ['jshint']);
  };
  