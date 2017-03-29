module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
					style: 'compressed',
				},
				files: {
					'style/styles.css': 'style/scss/styles.scss',
				}
			}
		},

		uglify: {

			options: {
				sourceMap: true
			},

			separated_js: {
				files: {
					'js/build/scripts.min.js': [
						// 'bower_components/instafeed.js/instafeed.js',
						// 'thirdparty/swiper/dist/js/swiper.jquery.min.js',
						'js/src/*.js'
					],
				}
			}

		},

		watch: {

			scripts: {
				files: ['js/src/*.js'],
				tasks: ['uglify'],
				options: {
					spawn: false,
				}
			},

			css: {
				files: ['style/scss/**/*.scss', 'style/styles.css', 'thirdparty/**/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
				}
			},

			html: {
				files: ['*.html', '**/*.html']
			},

			options: {
				livereload: true
			}

		}

	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['uglify', 'sass']);

};
