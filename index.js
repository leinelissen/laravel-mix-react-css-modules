let mix = require("laravel-mix");
let ReactCSSModules = require("./ReactCSSModules");

mix.extend("reactCSSModules", new ReactCSSModules());
