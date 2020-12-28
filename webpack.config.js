module.exports = {
  output: {
    filename: 'src/index.js'
  },
  module: {
    rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }
    ]
  }
};