const path = require('path'); 

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "styled-components": path.resolve(__dirname, "..","node_modules", "styled-components"),
    }
  }
};
