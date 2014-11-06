module.exports = function(grunt) {

	//configuration
	grunt.initConfig({
		connect: {
			options: {
				hostname: '0.0.0.0', //Setting it to '*' will make the server accessible from anywhere.
				port: 9001,
				open: true,
				keepalive: true
			},
			app: {
				options: {
					base: '.',
					open: {
						target: 'http://localhost:9001/index.html'
					}
				}
			}
		}
	});

	//load plugin
	grunt.loadNpmTasks('grunt-contrib-connect');

	//register task
	grunt.registerTask('default',['connect']);
}