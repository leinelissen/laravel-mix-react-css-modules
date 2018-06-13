import path from 'path';
import mix from 'laravel-mix';

var ReactCSSModules = function ReactCSSModules() {
    this.scopedName = this.defaultScopedName();
};
ReactCSSModules.prototype.name = function name () {
    return "reactCSSModules";
};
ReactCSSModules.prototype.defaultScopedName = function defaultScopedName () {
    return "[name]__[local]___[hash:base64:5]";
};
ReactCSSModules.prototype.dependencies = function dependencies () {
    return ["babel-plugin-react-css-modules","postcss-scss","postcss-nested"];
};
ReactCSSModules.prototype.register = function register (scopedName) {
    if (scopedName) {
        this.scopedName = scopedName;
    }
};
ReactCSSModules.prototype.webpackConfig = function webpackConfig (config) {
        var this$1 = this;

    config.module.rules = config.module.rules.map(function (rule) {
        if (!rule.loaders || rule.loaders.length > 3) {
            return rule;
        }
        rule.loaders = rule.loaders.map(function (loader) {
            if (loader.loader === "css-loader" || loader === "css-loader") {
                var options = {
                    modules: true,
                    localIdentName: this$1.scopedName
                };
                loader = typeof loader === "string" ? {
                    loader: loader
                } : loader;
                loader.options = loader.options ? Object.assign({}, loader.options, options) : options;
            }
            return loader;
        });
        return rule;
    });
    return config;
};
ReactCSSModules.prototype.babelConfig = function babelConfig () {
    return {
        plugins: [["react-css-modules",{
            filetypes: {
                ".scss": {
                    syntax: "postcss-scss",
                    plugins: ["postcss-nested"]
                }
            },
            exclude: "node_modules",
            handleMissingStyleName: "warn",
            generateScopedName: this.scopedName,
            context: path.resolve(__dirname + "/../../laravel-mix/src/builder")
        }]]
    };
};



mix.extend("reactCSSModules", new ReactCSSModules());

