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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlYWN0Q1NTTW9kdWxlcy5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxVQUFVO0FBRWpCLE1BQU0sZ0JBQWdCO0lBTXBCLGNBQWM7UUFDWixJQUFBLENBQUssVUFBTCxDQUFBLENBQUEsQ0FBa0IsSUFBQSxDQUFLLGlCQUFMO0lBQ3RCO0lBVUUsT0FBTztRQUNMLE9BQU87SUFDWDtJQU9FLG9CQUFvQjtRQUNsQixPQUFPO0lBQ1g7SUFPRSxlQUFlO1FBQ2IsT0FBTyxDQUFDLGlDQUFrQyxlQUFnQjtJQUM5RDtJQWVFLFNBQVMsWUFBWTtRQUNuQixJQUFJLFlBQVk7WUFDZCxJQUFBLENBQUssVUFBTCxDQUFBLENBQUEsQ0FBa0I7UUFDeEI7SUFDQTtJQVFFLGNBQWMsUUFBUTtRQUVwQixNQUFBLENBQU8sTUFBUCxDQUFjLEtBQWQsQ0FBQSxDQUFBLENBQXNCLE1BQUEsQ0FBTyxNQUFQLENBQWMsS0FBZCxDQUFvQixHQUFwQixDQUF3QixJQUFBLElBQVE7WUFDcEQsSUFBSSxDQUFDLElBQUEsQ0FBSyxPQUFOLENBQUEsRUFBQSxDQUFpQixJQUFBLENBQUssT0FBTCxDQUFhLE1BQWIsQ0FBQSxDQUFBLENBQXNCLEdBQUc7Z0JBQzVDLE9BQU87WUFDZjtZQUdNLElBQUEsQ0FBSyxPQUFMLENBQUEsQ0FBQSxDQUFlLElBQUEsQ0FBSyxPQUFMLENBQWEsR0FBYixDQUFpQixNQUFBLElBQVU7Z0JBQ3hDLElBQUksTUFBQSxDQUFPLE1BQVAsQ0FBQSxHQUFBLENBQWtCLFlBQWxCLENBQUEsRUFBQSxDQUFrQyxNQUFBLENBQUEsR0FBQSxDQUFXLGNBQWM7b0JBRTdELEdBQUEsQ0FBSSxVQUFVO3dCQUNaLFNBQVMsSUFERyxDQUFBO3dCQUVaLGdCQUFnQixJQUFBLENBQUs7O29CQUl2QixNQUFBLENBQUEsQ0FBQSxDQUNFLE1BQUEsQ0FBTyxNQUFQLENBQUEsR0FBQSxDQUFrQixRQUFsQixHQUNJO3dCQUNFO3dCQUVGO29CQUdOLE1BQUEsQ0FBTyxPQUFQLENBQUEsQ0FBQSxDQUFpQixNQUFBLENBQU8sT0FBUCxHQUNiLE1BQUEsQ0FBTyxNQUFQLENBQWMsSUFBSSxNQUFBLENBQU8sU0FBUyxXQUNsQztnQkFDZDtnQkFFUSxPQUFPO1lBQ2Y7WUFFTSxPQUFPO1FBQ2I7UUFFSSxPQUFPO0lBQ1g7SUFPRSxjQUFjO1FBQ1osT0FBTztZQUNMLFNBQVMsQ0FDUCxDQUNFLG9CQUNBO2dCQUNFLFdBQVc7b0JBQ1QsU0FBUzt3QkFDUCxRQUFRLGNBREQsQ0FBQTt3QkFFUCxTQUFTLENBQUM7O2lCQUpoQixDQUFBO2dCQU9FLFNBQVMsY0FQWCxDQUFBO2dCQVFFLHdCQUF3QixNQVIxQixDQUFBO2dCQVNFLG9CQUFvQixJQUFBLENBQUssVUFUM0IsQ0FBQTtnQkFjRSxTQUFTLElBQUEsQ0FBSyxPQUFMLENBQWEsU0FBQSxDQUFBLENBQUEsQ0FBWTs7O0lBSzlDO0FBQ0E7QUFFQSxlQUFlO0FBMUlmIiwiZmlsZSI6IlJlYWN0Q1NTTW9kdWxlcy5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuY2xhc3MgUmVhY3RDU1NNb2R1bGVzIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpc2UgdGhlIGNsYXNzXG4gICAqXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNjb3BlZE5hbWUgPSB0aGlzLmRlZmF1bHRTY29wZWROYW1lKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG9wdGlvbmFsIG5hbWUgdG8gYmUgdXNlZCB3aGVuIGNhbGxlZCBieSBNaXguXG4gICAqIERlZmF1bHRzIHRvIHRoZSBjbGFzcyBuYW1lLCBsb3dlcmNhc2VkLlxuICAgKlxuICAgKiBFeDogbWl4LmV4YW1wbGUoKTtcbiAgICpcbiAgICogQHJldHVybiB7U3RyaW5nfEFycmF5fVxuICAgKi9cbiAgbmFtZSgpIHtcbiAgICByZXR1cm4gXCJyZWFjdENTU01vZHVsZXNcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGRlZmF1bHQgc2NvcGVkIG5hbWUgdmFsdWVcbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZGVmYXVsdFNjb3BlZE5hbWUoKSB7XG4gICAgcmV0dXJuIFwiW25hbWVdX19bbG9jYWxdX19fW2hhc2g6YmFzZTY0OjVdXCI7XG4gIH1cblxuICAvKipcbiAgICogQWxsIGRlcGVuZGVuY2llcyB0aGF0IHNob3VsZCBiZSBpbnN0YWxsZWQgYnkgTWl4LlxuICAgKlxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIGRlcGVuZGVuY2llcygpIHtcbiAgICByZXR1cm4gW1wiYmFiZWwtcGx1Z2luLXJlYWN0LWNzcy1tb2R1bGVzXCIsIFwicG9zdGNzcy1zY3NzXCIsIFwicG9zdGNzcy1uZXN0ZWRcIl07XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogV2hlbiB5b3VyIGNvbXBvbmVudCBpcyBjYWxsZWQsIGFsbCB1c2VyIHBhcmFtZXRlcnNcbiAgICogd2lsbCBiZSBwYXNzZWQgdG8gdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIEV4OiByZWdpc3RlcihzcmMsIG91dHB1dCkge31cbiAgICogRXg6IG1peC55b3VyUGx1Z2luKCdzcmMvcGF0aCcsICdvdXRwdXQvcGF0aCcpO1xuICAgKlxuICAgKiBAcGFyYW0gIHsqfSAuLi5wYXJhbXNcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICpcbiAgICovXG4gIHJlZ2lzdGVyKHNjb3BlZE5hbWUpIHtcbiAgICBpZiAoc2NvcGVkTmFtZSkge1xuICAgICAgdGhpcy5zY29wZWROYW1lID0gc2NvcGVkTmFtZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGdlbmVyYXRlZCB3ZWJwYWNrIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gd2VicGFja0NvbmZpZ1xuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgd2VicGFja0NvbmZpZyhjb25maWcpIHtcbiAgICAvLyBMb29wIHRocm91Z2ggYWxsIHJ1bGVzXG4gICAgY29uZmlnLm1vZHVsZS5ydWxlcyA9IGNvbmZpZy5tb2R1bGUucnVsZXMubWFwKHJ1bGUgPT4ge1xuICAgICAgaWYgKCFydWxlLmxvYWRlcnMgfHwgcnVsZS5sb2FkZXJzLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICB9XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgbG9hZGVyc1xuICAgICAgcnVsZS5sb2FkZXJzID0gcnVsZS5sb2FkZXJzLm1hcChsb2FkZXIgPT4ge1xuICAgICAgICBpZiAobG9hZGVyLmxvYWRlciA9PT0gXCJjc3MtbG9hZGVyXCIgfHwgbG9hZGVyID09PSBcImNzcy1sb2FkZXJcIikge1xuICAgICAgICAgIC8vIEFkZCBvdXIgb3B0aW9ucyB0byB0aGUgbG9hZGVyXG4gICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtb2R1bGVzOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxJZGVudE5hbWU6IHRoaXMuc2NvcGVkTmFtZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBDb252ZXJ0IHN0cmluZyBzeW50YXggdG8gb2JqZWN0IHN5bnRheCBpZiBuZWNjZXNzYXJ5XG4gICAgICAgICAgbG9hZGVyID1cbiAgICAgICAgICAgIHR5cGVvZiBsb2FkZXIgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICBsb2FkZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDogbG9hZGVyO1xuXG4gICAgICAgICAgLy8gSW5qZWN0IG91ciBvcHRpb25zIGludG8gdGhlIGxvYWRlclxuICAgICAgICAgIGxvYWRlci5vcHRpb25zID0gbG9hZGVyLm9wdGlvbnNcbiAgICAgICAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgbG9hZGVyLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgICAgICAgICA6IG9wdGlvbnM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbG9hZGVyO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBydWxlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIC8qKlxuICAgKiBCYWJlbCBjb25maWcgdG8gYmUgbWVyZ2VkIHdpdGggTWl4J3MgZGVmYXVsdHMuXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGJhYmVsQ29uZmlnKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgIFtcbiAgICAgICAgICBcInJlYWN0LWNzcy1tb2R1bGVzXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmlsZXR5cGVzOiB7XG4gICAgICAgICAgICAgIFwiLnNjc3NcIjoge1xuICAgICAgICAgICAgICAgIHN5bnRheDogXCJwb3N0Y3NzLXNjc3NcIixcbiAgICAgICAgICAgICAgICBwbHVnaW5zOiBbXCJwb3N0Y3NzLW5lc3RlZFwiXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhjbHVkZTogXCJub2RlX21vZHVsZXNcIixcbiAgICAgICAgICAgIGhhbmRsZU1pc3NpbmdTdHlsZU5hbWU6IFwid2FyblwiLFxuICAgICAgICAgICAgZ2VuZXJhdGVTY29wZWROYW1lOiB0aGlzLnNjb3BlZE5hbWUsXG4gICAgICAgICAgICAvLyBUSElTIElTIERJUlRZIEhBQ0tcbiAgICAgICAgICAgIC8vIEFwcGVhcmFudGx5IHRoZSBjb250ZXh0IGZvciBsYXJhdmVsLW1peCBsaXZlcyBpbiB0aGUgbm9kZV9tb2R1bGVzIGZvbGRlclxuICAgICAgICAgICAgLy8gd2hlbiBjYWxjdWxhdGluZyBoYXNoZXMgZm9yIHRoZSBpZGVudCBuYW1lcy4gVGhpcyBpcyBwcmV0dHkgc2hpdHR5IGJlaGF2aW91cixcbiAgICAgICAgICAgIC8vIGJ1dCBJIGFtIHRvbyBsYXp5IHJpZ2h0IG5vdyB0byBmaXggaXQuXG4gICAgICAgICAgICBjb250ZXh0OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lICsgXCIvLi4vLi4vbGFyYXZlbC1taXgvc3JjL2J1aWxkZXJcIilcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Q1NTTW9kdWxlcztcbiJdfQ==

mix.extend("reactCSSModules", new ReactCSSModules());


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFNBQVM7QUFDaEIsT0FBTyxxQkFBcUI7QUFFNUIsR0FBQSxDQUFJLE1BQUosQ0FBVyxtQkFBbUIsSUFBSSxlQUFKO0FBSDlCIiwiZmlsZSI6ImluZGV4LmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaXggZnJvbSBcImxhcmF2ZWwtbWl4XCI7XG5pbXBvcnQgUmVhY3RDU1NNb2R1bGVzIGZyb20gXCIuL1JlYWN0Q1NTTW9kdWxlc1wiO1xuXG5taXguZXh0ZW5kKFwicmVhY3RDU1NNb2R1bGVzXCIsIG5ldyBSZWFjdENTU01vZHVsZXMoKSk7XG4iXX0=

})));
