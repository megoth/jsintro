module.exports = {
	'default': {
	  files: ['examples/*.*', 'src/*.md', 'sass/*.scss', 'templates/*.html'],
	  tasks: ['default']
	},
	'test': {
		files: ['test/*.js', 'tools/*.js'],
		tasks: ['buster:growl']
	}
};