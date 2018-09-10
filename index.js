class MyWebpackPlugin {
    constructor(options) {}

    apply(compiler) {
        compiler.plugin("compilation", function(compilation) {
            console.log("我自己的webpack插件...");
        });
    }
}

module.exports = MyWebpackPlugin;
