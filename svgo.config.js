const addViewBox = require('svgo-add-viewbox');

module.exports = {
	multipass: true,
	removeViewBox: false,
	js2svg: {
		indent: 4,
		pretty: true,
	},
	plugins: [
		{
			fn: addViewBox.fn,
			name: 'addViewBox',
			type: addViewBox.type,
			active: addViewBox.active,
			description: addViewBox.description,
		},
	],
};
