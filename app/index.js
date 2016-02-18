require('./main.css');
var component = require('./component');
var app = document.createElement('div');


document.body.appendChild(app);

app.appendChild(component());f

module.exports = {
  plugins: [
    require('babel-plugin-syntax-class-properties'),
    require('babel-plugin-syntax-decorators'),
    require('babel-plugin-syntax-object-rest-spread'),

    // You can pass parameters using an array syntax
    [
      require('babel-plugin-transform-regenerator'),
      {
        async: false,
        asyncGenerators: false
      }
    ]
  ]
}
