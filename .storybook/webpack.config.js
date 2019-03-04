const path = require('path'); 

module.exports = {
  resolve: {
    alias: {
      "styled-components": path.resolve(__dirname, "..","node_modules", "styled-components"),
    }
  }
};