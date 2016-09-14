module.exports = [

    {
        entry: {
            "modules": "./app/modules.js",
            "public": './app/public.js'
        },
        output: {
            filename: "./app/bundle/[name].js"
        },
        module: {
            loaders: [
                { test: /\.vue$/, loader: "vue" }
            ]
        }
    }

];
