class ReactCSSModules {
  /**
   * Initialise the class
   *
   * @return {void}
   */
  constructor() {
    this.scopedName = this.defaultScopedName();
  }

  /**
   * The optional name to be used when called by Mix.
   * Defaults to the class name, lowercased.
   *
   * Ex: mix.example();
   *
   * @return {String|Array}
   */
  name() {
    return "reactCSSModules";
  }

  /**
   * Return the default scoped name value
   *
   * @return {string}
   */
  defaultScopedName() {
    return "[name]__[local]___[hash:base64:5]";
  }

  /**
   * All dependencies that should be installed by Mix.
   *
   * @return {Array}
   */
  dependencies() {
    return ["babel-plugin-react-css-modules", "postcss-scss", "postcss-nested"];
  }

  /**
   * Register the component.
   *
   * When your component is called, all user parameters
   * will be passed to this method.
   *
   * Ex: register(src, output) {}
   * Ex: mix.yourPlugin('src/path', 'output/path');
   *
   * @param  {*} ...params
   * @return {void}
   *
   */
  register(scopedName) {
    if (scopedName) {
      this.scopedName = scopedName;
    }
  }

  /**
   * Override the generated webpack configuration.
   *
   * @param  {Object} webpackConfig
   * @return {void}
   */
  webpackConfig(config) {
    // Loop through all rules
    config.module.rules = config.module.rules.map((rule) => {
      if (!rule.use && !rule.oneOf) {
        return rule;
      }

      // Loop through all loaders on regular use options
      rule.use = Array.isArray(rule.use) ? rule.use.map(this.replaceLoaderOptions) : rule.use;
      
      // Alternatively, loop through all of the oneOf options (if they exist)
      rule.oneOf = Array.isArray(rule.oneOf) 
        // And then replace all the loaders on each individual option
        ? rule.oneOf.map(oneOf => {
          oneOf.use = oneOf.use.map(this.replaceLoaderOptions);
          return oneOf;
        })
        : rule.oneOf;

      return rule;
    });

    return config;
  }

  /**
   * This function replaces the loader options for any css-loader rules that are
   * found in the webpack config.
   * @param {*} rule 
   */
  replaceLoaderOptions = (rule) => {
    // If the loader is not the css-loader, we can safely skip it
    if (rule.loader !== "css-loader" && rule !== "css-loader") {
      return rule;
    }

    // Add our options to the loader
    let options = {
      modules: {
        mode: "local",
        localIdentName: this.scopedName,
      },
    };

    // Convert string syntax to object syntax if neccessary
    rule =
      typeof rule === "string"
        ? {
            rule,
          }
        : rule;

    // Inject our options into the loader
    rule.options = rule.options
      ? Object.assign({}, rule.options, options)
      : options;

    return rule;
  }

  /**
   * Babel config to be merged with Mix's defaults.
   *
   * @return {Object}
   */
  babelConfig() {
    return {
      plugins: [
        [
          "react-css-modules",
          {
            filetypes: {
              ".scss": {
                syntax: "postcss-scss",
                plugins: ["postcss-nested"],
              },
            },
            exclude: "node_modules",
            handleMissingStyleName: "warn",
            generateScopedName: this.scopedName,
          },
        ],
      ],
    };
  }
}

export default ReactCSSModules;
