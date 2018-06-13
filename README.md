# Babel-plugin-react-css-modules wrapper for Laravel Mix
This plugin integrates [babel-plugin-react-css-modules](https://github.com/gajus/babel-plugin-react-css-modules) into the core of [Laravel Mix](https://github.com/JeffreyWay/laravel-mix). Shoutout to both @JeffreyWay and @gajus for their outstanding work!

### Example
Just import the package and it will automagically attach itself to Laravel Mix. Then just call `reactCSSModules` and all CSS files will be correctly processed.

```javascript
let mix = require('laravel-mix');
require('laravel-mix-react-css-modules');

mix.react('resources/assets/app.js', 'public/js')
   .reactCSSModules();
```

It is also possible to modify the way a classname is generated, by supplying a new syntax to the function. Check [this](https://github.com/webpack/loader-utils#interpolatename) to see how the syntax works.
```javascript
let mix = require('laravel-mix');
require('laravel-mix-react-css-modules');

// DEFAULT: [name]__[local]___[hash:base64:5]
mix.react('resources/assets/app.js', 'public/js')
   .reactCSSModules('[path]__[name]___[hash:base64]');
```