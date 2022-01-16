const path = require('path');

module.exports = {
  entry: {
	'index' : './javascript/index.js',
	'create' : './javascript/create.js',
	'view' : './javascript/view.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};