const path = require('path');

module.exports = {
  entry: {
	'Page1' : './javascript/Page1.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};