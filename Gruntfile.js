module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        default: {
            options: {
                message: "Grunt is working!"
            }
        }
    });

    grunt.registerTask('default', [], function() {
        grunt.log.writeln(this.options().message);
    });
};
