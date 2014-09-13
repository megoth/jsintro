module.exports = {
	'default': {
	  files: ['src/*.md', 'sass/*.scss', 'templates/*.html'],
	  tasks: ['default']
	},
	'test': {
		files: ['test/*.js', 'tools/*.js'],
		tasks: ['buster:growl']
	}
};