(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('laravel-mix')) :
	typeof define === 'function' && define.amd ? define(['laravel-mix'], factory) :
	(factory(global.mix));
}(this, (function (mix) {

mix = mix && mix.hasOwnProperty('default') ? mix['default'] : mix;

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
            context: __dirname + "/node_modules/laravel-mix/src/builder"
        }]]
    };
};



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlYWN0Q1NTTW9kdWxlcy5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxnQkFBZ0I7SUFNcEIsY0FBYztRQUNaLElBQUEsQ0FBSyxVQUFMLENBQUEsQ0FBQSxDQUFrQixJQUFBLENBQUssaUJBQUw7SUFDdEI7SUFVRSxPQUFPO1FBQ0wsT0FBTztJQUNYO0lBT0Usb0JBQW9CO1FBQ2xCLE9BQU87SUFDWDtJQU9FLGVBQWU7UUFDYixPQUFPLENBQUMsaUNBQWtDLGVBQWdCO0lBQzlEO0lBZUUsU0FBUyxZQUFZO1FBQ25CLElBQUksWUFBWTtZQUNkLElBQUEsQ0FBSyxVQUFMLENBQUEsQ0FBQSxDQUFrQjtRQUN4QjtJQUNBO0lBUUUsY0FBYyxRQUFRO1FBRXBCLE1BQUEsQ0FBTyxNQUFQLENBQWMsS0FBZCxDQUFBLENBQUEsQ0FBc0IsTUFBQSxDQUFPLE1BQVAsQ0FBYyxLQUFkLENBQW9CLEdBQXBCLENBQXdCLElBQUEsSUFBUTtZQUNwRCxJQUFJLENBQUMsSUFBQSxDQUFLLE9BQU4sQ0FBQSxFQUFBLENBQWlCLElBQUEsQ0FBSyxPQUFMLENBQWEsTUFBYixDQUFBLENBQUEsQ0FBc0IsR0FBRztnQkFDNUMsT0FBTztZQUNmO1lBR00sSUFBQSxDQUFLLE9BQUwsQ0FBQSxDQUFBLENBQWUsSUFBQSxDQUFLLE9BQUwsQ0FBYSxHQUFiLENBQWlCLE1BQUEsSUFBVTtnQkFDeEMsSUFBSSxNQUFBLENBQU8sTUFBUCxDQUFBLEdBQUEsQ0FBa0IsWUFBbEIsQ0FBQSxFQUFBLENBQWtDLE1BQUEsQ0FBQSxHQUFBLENBQVcsY0FBYztvQkFFN0QsR0FBQSxDQUFJLFVBQVU7d0JBQ1osU0FBUyxJQURHLENBQUE7d0JBRVosZ0JBQWdCLElBQUEsQ0FBSzs7b0JBSXZCLE1BQUEsQ0FBQSxDQUFBLENBQ0UsTUFBQSxDQUFPLE1BQVAsQ0FBQSxHQUFBLENBQWtCLFFBQWxCLEdBQ0k7d0JBQ0U7d0JBRUY7b0JBR04sTUFBQSxDQUFPLE9BQVAsQ0FBQSxDQUFBLENBQWlCLE1BQUEsQ0FBTyxPQUFQLEdBQ2IsTUFBQSxDQUFPLE1BQVAsQ0FBYyxJQUFJLE1BQUEsQ0FBTyxTQUFTLFdBQ2xDO2dCQUNkO2dCQUVRLE9BQU87WUFDZjtZQUVNLE9BQU87UUFDYjtRQUVJLE9BQU87SUFDWDtJQU9FLGNBQWM7UUFDWixPQUFPO1lBQ0wsU0FBUyxDQUNQLENBQ0Usb0JBQ0E7Z0JBQ0UsV0FBVztvQkFDVCxTQUFTO3dCQUNQLFFBQVEsY0FERCxDQUFBO3dCQUVQLFNBQVMsQ0FBQzs7aUJBSmhCLENBQUE7Z0JBT0UsU0FBUyxjQVBYLENBQUE7Z0JBUUUsd0JBQXdCLE1BUjFCLENBQUE7Z0JBU0Usb0JBQW9CLElBQUEsQ0FBSyxVQVQzQixDQUFBO2dCQWNFLFNBQVMsU0FBQSxDQUFBLENBQUEsQ0FBWTs7O0lBS2pDO0FBQ0E7QUFFQSxlQUFlO0FBeElmIiwiZmlsZSI6IlJlYWN0Q1NTTW9kdWxlcy5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBSZWFjdENTU01vZHVsZXMge1xuICAvKipcbiAgICogSW5pdGlhbGlzZSB0aGUgY2xhc3NcbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2NvcGVkTmFtZSA9IHRoaXMuZGVmYXVsdFNjb3BlZE5hbWUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgb3B0aW9uYWwgbmFtZSB0byBiZSB1c2VkIHdoZW4gY2FsbGVkIGJ5IE1peC5cbiAgICogRGVmYXVsdHMgdG8gdGhlIGNsYXNzIG5hbWUsIGxvd2VyY2FzZWQuXG4gICAqXG4gICAqIEV4OiBtaXguZXhhbXBsZSgpO1xuICAgKlxuICAgKiBAcmV0dXJuIHtTdHJpbmd8QXJyYXl9XG4gICAqL1xuICBuYW1lKCkge1xuICAgIHJldHVybiBcInJlYWN0Q1NTTW9kdWxlc1wiO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZGVmYXVsdCBzY29wZWQgbmFtZSB2YWx1ZVxuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBkZWZhdWx0U2NvcGVkTmFtZSgpIHtcbiAgICByZXR1cm4gXCJbbmFtZV1fX1tsb2NhbF1fX19baGFzaDpiYXNlNjQ6NV1cIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGwgZGVwZW5kZW5jaWVzIHRoYXQgc2hvdWxkIGJlIGluc3RhbGxlZCBieSBNaXguXG4gICAqXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgZGVwZW5kZW5jaWVzKCkge1xuICAgIHJldHVybiBbXCJiYWJlbC1wbHVnaW4tcmVhY3QtY3NzLW1vZHVsZXNcIiwgXCJwb3N0Y3NzLXNjc3NcIiwgXCJwb3N0Y3NzLW5lc3RlZFwiXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBXaGVuIHlvdXIgY29tcG9uZW50IGlzIGNhbGxlZCwgYWxsIHVzZXIgcGFyYW1ldGVyc1xuICAgKiB3aWxsIGJlIHBhc3NlZCB0byB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogRXg6IHJlZ2lzdGVyKHNyYywgb3V0cHV0KSB7fVxuICAgKiBFeDogbWl4LnlvdXJQbHVnaW4oJ3NyYy9wYXRoJywgJ291dHB1dC9wYXRoJyk7XG4gICAqXG4gICAqIEBwYXJhbSAgeyp9IC4uLnBhcmFtc1xuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKlxuICAgKi9cbiAgcmVnaXN0ZXIoc2NvcGVkTmFtZSkge1xuICAgIGlmIChzY29wZWROYW1lKSB7XG4gICAgICB0aGlzLnNjb3BlZE5hbWUgPSBzY29wZWROYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgZ2VuZXJhdGVkIHdlYnBhY2sgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSB3ZWJwYWNrQ29uZmlnXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICB3ZWJwYWNrQ29uZmlnKGNvbmZpZykge1xuICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgcnVsZXNcbiAgICBjb25maWcubW9kdWxlLnJ1bGVzID0gY29uZmlnLm1vZHVsZS5ydWxlcy5tYXAocnVsZSA9PiB7XG4gICAgICBpZiAoIXJ1bGUubG9hZGVycyB8fCBydWxlLmxvYWRlcnMubGVuZ3RoID4gMykge1xuICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgIH1cblxuICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBsb2FkZXJzXG4gICAgICBydWxlLmxvYWRlcnMgPSBydWxlLmxvYWRlcnMubWFwKGxvYWRlciA9PiB7XG4gICAgICAgIGlmIChsb2FkZXIubG9hZGVyID09PSBcImNzcy1sb2FkZXJcIiB8fCBsb2FkZXIgPT09IFwiY3NzLWxvYWRlclwiKSB7XG4gICAgICAgICAgLy8gQWRkIG91ciBvcHRpb25zIHRvIHRoZSBsb2FkZXJcbiAgICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1vZHVsZXM6IHRydWUsXG4gICAgICAgICAgICBsb2NhbElkZW50TmFtZTogdGhpcy5zY29wZWROYW1lXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIENvbnZlcnQgc3RyaW5nIHN5bnRheCB0byBvYmplY3Qgc3ludGF4IGlmIG5lY2Nlc3NhcnlcbiAgICAgICAgICBsb2FkZXIgPVxuICAgICAgICAgICAgdHlwZW9mIGxvYWRlciA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgIGxvYWRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiBsb2FkZXI7XG5cbiAgICAgICAgICAvLyBJbmplY3Qgb3VyIG9wdGlvbnMgaW50byB0aGUgbG9hZGVyXG4gICAgICAgICAgbG9hZGVyLm9wdGlvbnMgPSBsb2FkZXIub3B0aW9uc1xuICAgICAgICAgICAgPyBPYmplY3QuYXNzaWduKHt9LCBsb2FkZXIub3B0aW9ucywgb3B0aW9ucylcbiAgICAgICAgICAgIDogb3B0aW9ucztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsb2FkZXI7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29uZmlnO1xuICB9XG5cbiAgLyoqXG4gICAqIEJhYmVsIGNvbmZpZyB0byBiZSBtZXJnZWQgd2l0aCBNaXgncyBkZWZhdWx0cy5cbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgYmFiZWxDb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgW1xuICAgICAgICAgIFwicmVhY3QtY3NzLW1vZHVsZXNcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBmaWxldHlwZXM6IHtcbiAgICAgICAgICAgICAgXCIuc2Nzc1wiOiB7XG4gICAgICAgICAgICAgICAgc3ludGF4OiBcInBvc3Rjc3Mtc2Nzc1wiLFxuICAgICAgICAgICAgICAgIHBsdWdpbnM6IFtcInBvc3Rjc3MtbmVzdGVkXCJdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleGNsdWRlOiBcIm5vZGVfbW9kdWxlc1wiLFxuICAgICAgICAgICAgaGFuZGxlTWlzc2luZ1N0eWxlTmFtZTogXCJ3YXJuXCIsXG4gICAgICAgICAgICBnZW5lcmF0ZVNjb3BlZE5hbWU6IHRoaXMuc2NvcGVkTmFtZSxcbiAgICAgICAgICAgIC8vIFRISVMgSVMgRElSVFkgSEFDS1xuICAgICAgICAgICAgLy8gQXBwZWFyYW50bHkgdGhlIGNvbnRleHQgZm9yIGxhcmF2ZWwtbWl4IGxpdmVzIGluIHRoZSBub2RlX21vZHVsZXMgZm9sZGVyXG4gICAgICAgICAgICAvLyB3aGVuIGNhbGN1bGF0aW5nIGhhc2hlcyBmb3IgdGhlIGlkZW50IG5hbWVzLiBUaGlzIGlzIHByZXR0eSBzaGl0dHkgYmVoYXZpb3VyLFxuICAgICAgICAgICAgLy8gYnV0IEkgYW0gdG9vIGxhenkgcmlnaHQgbm93IHRvIGZpeCBpdC5cbiAgICAgICAgICAgIGNvbnRleHQ6IF9fZGlybmFtZSArIFwiL25vZGVfbW9kdWxlcy9sYXJhdmVsLW1peC9zcmMvYnVpbGRlclwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdENTU01vZHVsZXM7XG4iXX0=

mix.extend("reactCSSModules", new ReactCSSModules());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFNBQVM7QUFDaEIsT0FBTyxxQkFBcUI7QUFFNUIsR0FBQSxDQUFJLE1BQUosQ0FBVyxtQkFBbUIsSUFBSSxlQUFKO0FBSDlCIiwiZmlsZSI6ImluZGV4LmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaXggZnJvbSBcImxhcmF2ZWwtbWl4XCI7XG5pbXBvcnQgUmVhY3RDU1NNb2R1bGVzIGZyb20gXCIuL1JlYWN0Q1NTTW9kdWxlc1wiO1xuXG5taXguZXh0ZW5kKFwicmVhY3RDU1NNb2R1bGVzXCIsIG5ldyBSZWFjdENTU01vZHVsZXMoKSk7XG4iXX0=

})));
