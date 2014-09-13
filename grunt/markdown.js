var parser = require('../tools/parseFunc')();

module.exports = {
	default: {
		files: [{
      src: 'src/presentation.md',
      dest: 'index.html'
    }],
    options: {
    	template: 'templates/presentation.html',
    	preCompile: function (src) {
    		return parser.parse(src);
    	},
    	templateContext: {
    		'title': 'An introduction to JavaScript'
    	}
    }
	}
};