## ❗️ Deprecation Notice
As of v6, Laravel Mix has (undocumented) support for CSS Modules. You can enable CSS Modules for your imports by renaming your files from `styles.css` / `styles.scss` to `styles.module.css` / `styles.module.scss`. This also makes it easier to integrate to the rest of the Mix ecosystem, when it comes to SASS and style extraction. For an in-depth example, please refer to [this Laravel Mix test](https://github.com/JeffreyWay/laravel-mix/blob/master/test/fixtures/integration/src/js/ScssModule.jsx) for an example.

You are encouraged to make the switch to v6, and as such development for anything but v5 security fixes or occasional pull requests is halted.

# Babel-plugin-react-css-modules wrapper for Laravel Mix
This plugin integrates [babel-plugin-react-css-modules](https://github.com/gajus/babel-plugin-react-css-modules) into the core of [Laravel Mix](https://github.com/JeffreyWay/laravel-mix). Shoutout to both @JeffreyWay and @gajus for their outstanding work!

### Support Matrix
|Laravel Mix Version|Laravel Mix React CSS Modules Version|Install command|
|---|---|---|
|v3-v4|v1|`npm install laravel-mix-react-css-modules@1`|
|v5|v2|`npm install laravel-mix-react-css-modules@2`|
|v6 (Alpha)|v3 (Alpha)|`npm install laravel-mix-react-css-modules@next`|

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
