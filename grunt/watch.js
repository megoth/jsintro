module.exports = {
	'default': {
	  files: ['src/*.md', 'sass/*.scss'],
	  tasks: ['default']
	},
	'test': {
		files: ['test/*.js', 'tools/*.js'],
		tasks: ['buster:growl']
	}
};