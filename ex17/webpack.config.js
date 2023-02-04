const path = require('path');

module.exports = {
    entry: {
        main: './src/js/main.js'
    },
    mode:'production',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].bundle.min.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ]
    }
}