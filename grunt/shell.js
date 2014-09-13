module.exports = {
	default: {
		command: 'pandoc \
							src/metadata.yaml src/presentation.md \
							-f markdown \
							-t html \
							-o index.html \
							--template=templates/presentation.html'
	}
};
