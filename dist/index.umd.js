(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('path'), require('laravel-mix')) :
	typeof define === 'function' && define.amd ? define(['path', 'laravel-mix'], factory) :
	(factory(global.path,global.mix));
}(this, (function (path,mix) {

path = path && path.hasOwnProperty('default') ? path['default'] : path;
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
        if (!rule.loaders) {
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlYWN0Q1NTTW9kdWxlcy5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxVQUFVO0FBRWpCLE1BQU0sZ0JBQWdCO0lBTXBCLGNBQWM7UUFDWixJQUFBLENBQUssVUFBTCxDQUFBLENBQUEsQ0FBa0IsSUFBQSxDQUFLLGlCQUFMO0lBQ3RCO0lBVUUsT0FBTztRQUNMLE9BQU87SUFDWDtJQU9FLG9CQUFvQjtRQUNsQixPQUFPO0lBQ1g7SUFPRSxlQUFlO1FBQ2IsT0FBTyxDQUFDLGlDQUFrQyxlQUFnQjtJQUM5RDtJQWVFLFNBQVMsWUFBWTtRQUNuQixJQUFJLFlBQVk7WUFDZCxJQUFBLENBQUssVUFBTCxDQUFBLENBQUEsQ0FBa0I7UUFDeEI7SUFDQTtJQVFFLGNBQWMsUUFBUTtRQUVwQixNQUFBLENBQU8sTUFBUCxDQUFjLEtBQWQsQ0FBQSxDQUFBLENBQXNCLE1BQUEsQ0FBTyxNQUFQLENBQWMsS0FBZCxDQUFvQixHQUFwQixDQUF3QixJQUFBLElBQVE7WUFDcEQsSUFBSSxDQUFDLElBQUEsQ0FBSyxTQUFTO2dCQUNqQixPQUFPO1lBQ2Y7WUFHTSxJQUFBLENBQUssT0FBTCxDQUFBLENBQUEsQ0FBZSxJQUFBLENBQUssT0FBTCxDQUFhLEdBQWIsQ0FBaUIsTUFBQSxJQUFVO2dCQUN4QyxJQUFJLE1BQUEsQ0FBTyxNQUFQLENBQUEsR0FBQSxDQUFrQixZQUFsQixDQUFBLEVBQUEsQ0FBa0MsTUFBQSxDQUFBLEdBQUEsQ0FBVyxjQUFjO29CQUU3RCxHQUFBLENBQUksVUFBVTt3QkFDWixTQUFTLElBREcsQ0FBQTt3QkFFWixnQkFBZ0IsSUFBQSxDQUFLOztvQkFJdkIsTUFBQSxDQUFBLENBQUEsQ0FDRSxNQUFBLENBQU8sTUFBUCxDQUFBLEdBQUEsQ0FBa0IsUUFBbEIsR0FDSTt3QkFDRTt3QkFFRjtvQkFHTixNQUFBLENBQU8sT0FBUCxDQUFBLENBQUEsQ0FBaUIsTUFBQSxDQUFPLE9BQVAsR0FDYixNQUFBLENBQU8sTUFBUCxDQUFjLElBQUksTUFBQSxDQUFPLFNBQVMsV0FDbEM7Z0JBQ2Q7Z0JBRVEsT0FBTztZQUNmO1lBRU0sT0FBTztRQUNiO1FBRUksT0FBTztJQUNYO0lBT0UsY0FBYztRQUNaLE9BQU87WUFDTCxTQUFTLENBQ1AsQ0FDRSxvQkFDQTtnQkFDRSxXQUFXO29CQUNULFNBQVM7d0JBQ1AsUUFBUSxjQURELENBQUE7d0JBRVAsU0FBUyxDQUFDOztpQkFKaEIsQ0FBQTtnQkFPRSxTQUFTLGNBUFgsQ0FBQTtnQkFRRSx3QkFBd0IsTUFSMUIsQ0FBQTtnQkFTRSxvQkFBb0IsSUFBQSxDQUFLLFVBVDNCLENBQUE7Z0JBY0UsU0FBUyxJQUFBLENBQUssT0FBTCxDQUFhLFNBQUEsQ0FBQSxDQUFBLENBQVk7OztJQUs5QztBQUNBO0FBRUEsZUFBZTtBQTFJZiIsImZpbGUiOiJSZWFjdENTU01vZHVsZXMuanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmNsYXNzIFJlYWN0Q1NTTW9kdWxlcyB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXNlIHRoZSBjbGFzc1xuICAgKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zY29wZWROYW1lID0gdGhpcy5kZWZhdWx0U2NvcGVkTmFtZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBvcHRpb25hbCBuYW1lIHRvIGJlIHVzZWQgd2hlbiBjYWxsZWQgYnkgTWl4LlxuICAgKiBEZWZhdWx0cyB0byB0aGUgY2xhc3MgbmFtZSwgbG93ZXJjYXNlZC5cbiAgICpcbiAgICogRXg6IG1peC5leGFtcGxlKCk7XG4gICAqXG4gICAqIEByZXR1cm4ge1N0cmluZ3xBcnJheX1cbiAgICovXG4gIG5hbWUoKSB7XG4gICAgcmV0dXJuIFwicmVhY3RDU1NNb2R1bGVzXCI7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBkZWZhdWx0IHNjb3BlZCBuYW1lIHZhbHVlXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGRlZmF1bHRTY29wZWROYW1lKCkge1xuICAgIHJldHVybiBcIltuYW1lXV9fW2xvY2FsXV9fX1toYXNoOmJhc2U2NDo1XVwiO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbCBkZXBlbmRlbmNpZXMgdGhhdCBzaG91bGQgYmUgaW5zdGFsbGVkIGJ5IE1peC5cbiAgICpcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBkZXBlbmRlbmNpZXMoKSB7XG4gICAgcmV0dXJuIFtcImJhYmVsLXBsdWdpbi1yZWFjdC1jc3MtbW9kdWxlc1wiLCBcInBvc3Rjc3Mtc2Nzc1wiLCBcInBvc3Rjc3MtbmVzdGVkXCJdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIFdoZW4geW91ciBjb21wb25lbnQgaXMgY2FsbGVkLCBhbGwgdXNlciBwYXJhbWV0ZXJzXG4gICAqIHdpbGwgYmUgcGFzc2VkIHRvIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBFeDogcmVnaXN0ZXIoc3JjLCBvdXRwdXQpIHt9XG4gICAqIEV4OiBtaXgueW91clBsdWdpbignc3JjL3BhdGgnLCAnb3V0cHV0L3BhdGgnKTtcbiAgICpcbiAgICogQHBhcmFtICB7Kn0gLi4ucGFyYW1zXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqXG4gICAqL1xuICByZWdpc3RlcihzY29wZWROYW1lKSB7XG4gICAgaWYgKHNjb3BlZE5hbWUpIHtcbiAgICAgIHRoaXMuc2NvcGVkTmFtZSA9IHNjb3BlZE5hbWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBnZW5lcmF0ZWQgd2VicGFjayBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHdlYnBhY2tDb25maWdcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHdlYnBhY2tDb25maWcoY29uZmlnKSB7XG4gICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBydWxlc1xuICAgIGNvbmZpZy5tb2R1bGUucnVsZXMgPSBjb25maWcubW9kdWxlLnJ1bGVzLm1hcChydWxlID0+IHtcbiAgICAgIGlmICghcnVsZS5sb2FkZXJzKSB7XG4gICAgICAgIHJldHVybiBydWxlO1xuICAgICAgfVxuXG4gICAgICAvLyBMb29wIHRocm91Z2ggYWxsIGxvYWRlcnNcbiAgICAgIHJ1bGUubG9hZGVycyA9IHJ1bGUubG9hZGVycy5tYXAobG9hZGVyID0+IHtcbiAgICAgICAgaWYgKGxvYWRlci5sb2FkZXIgPT09IFwiY3NzLWxvYWRlclwiIHx8IGxvYWRlciA9PT0gXCJjc3MtbG9hZGVyXCIpIHtcbiAgICAgICAgICAvLyBBZGQgb3VyIG9wdGlvbnMgdG8gdGhlIGxvYWRlclxuICAgICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgbW9kdWxlczogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsSWRlbnROYW1lOiB0aGlzLnNjb3BlZE5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gQ29udmVydCBzdHJpbmcgc3ludGF4IHRvIG9iamVjdCBzeW50YXggaWYgbmVjY2Vzc2FyeVxuICAgICAgICAgIGxvYWRlciA9XG4gICAgICAgICAgICB0eXBlb2YgbG9hZGVyID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgbG9hZGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6IGxvYWRlcjtcblxuICAgICAgICAgIC8vIEluamVjdCBvdXIgb3B0aW9ucyBpbnRvIHRoZSBsb2FkZXJcbiAgICAgICAgICBsb2FkZXIub3B0aW9ucyA9IGxvYWRlci5vcHRpb25zXG4gICAgICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30sIGxvYWRlci5vcHRpb25zLCBvcHRpb25zKVxuICAgICAgICAgICAgOiBvcHRpb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxvYWRlcjtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcnVsZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICAvKipcbiAgICogQmFiZWwgY29uZmlnIHRvIGJlIG1lcmdlZCB3aXRoIE1peCdzIGRlZmF1bHRzLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBiYWJlbENvbmZpZygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGx1Z2luczogW1xuICAgICAgICBbXG4gICAgICAgICAgXCJyZWFjdC1jc3MtbW9kdWxlc1wiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpbGV0eXBlczoge1xuICAgICAgICAgICAgICBcIi5zY3NzXCI6IHtcbiAgICAgICAgICAgICAgICBzeW50YXg6IFwicG9zdGNzcy1zY3NzXCIsXG4gICAgICAgICAgICAgICAgcGx1Z2luczogW1wicG9zdGNzcy1uZXN0ZWRcIl1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4Y2x1ZGU6IFwibm9kZV9tb2R1bGVzXCIsXG4gICAgICAgICAgICBoYW5kbGVNaXNzaW5nU3R5bGVOYW1lOiBcIndhcm5cIixcbiAgICAgICAgICAgIGdlbmVyYXRlU2NvcGVkTmFtZTogdGhpcy5zY29wZWROYW1lLFxuICAgICAgICAgICAgLy8gVEhJUyBJUyBESVJUWSBIQUNLXG4gICAgICAgICAgICAvLyBBcHBlYXJhbnRseSB0aGUgY29udGV4dCBmb3IgbGFyYXZlbC1taXggbGl2ZXMgaW4gdGhlIG5vZGVfbW9kdWxlcyBmb2xkZXJcbiAgICAgICAgICAgIC8vIHdoZW4gY2FsY3VsYXRpbmcgaGFzaGVzIGZvciB0aGUgaWRlbnQgbmFtZXMuIFRoaXMgaXMgcHJldHR5IHNoaXR0eSBiZWhhdmlvdXIsXG4gICAgICAgICAgICAvLyBidXQgSSBhbSB0b28gbGF6eSByaWdodCBub3cgdG8gZml4IGl0LlxuICAgICAgICAgICAgY29udGV4dDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSArIFwiLy4uLy4uL2xhcmF2ZWwtbWl4L3NyYy9idWlsZGVyXCIpXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdENTU01vZHVsZXM7XG4iXX0=

mix.extend("reactCSSModules", new ReactCSSModules());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFNBQVM7QUFDaEIsT0FBTyxxQkFBcUI7QUFFNUIsR0FBQSxDQUFJLE1BQUosQ0FBVyxtQkFBbUIsSUFBSSxlQUFKO0FBSDlCIiwiZmlsZSI6ImluZGV4LmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaXggZnJvbSBcImxhcmF2ZWwtbWl4XCI7XG5pbXBvcnQgUmVhY3RDU1NNb2R1bGVzIGZyb20gXCIuL1JlYWN0Q1NTTW9kdWxlc1wiO1xuXG5taXguZXh0ZW5kKFwicmVhY3RDU1NNb2R1bGVzXCIsIG5ldyBSZWFjdENTU01vZHVsZXMoKSk7XG4iXX0=

})));
