const path = require('path');

module.exports = {
  entry: path.join(__dirname, "app/assets/scripts/App.js"),
  output: {
    path: path.join(__dirname, "app/temp/scripts/"),
    filename: "App.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
