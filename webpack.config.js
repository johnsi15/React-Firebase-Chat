const path = require('path');

const config = {
  entry: {
    app: './src/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"]
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    inline: true,
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            plugins: []
          }
        }
      }
    ]
  },
  plugins: []
}

module.exports = config;
