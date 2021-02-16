const path = require('path');
module.exports = {
  mode: 'development',
  target: 'es5',
  entry: {
    epsg_constants: './src/index.ts',
  },  
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    publicPath: 'dist',
    filename: '[name]_bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'library_epsg_constants'
  },
};