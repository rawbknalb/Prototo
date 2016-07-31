module.exports = [

    {
        entry: {
            "questiongroups": "./app/questiongroups.js",
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
