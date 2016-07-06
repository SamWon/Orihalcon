module.exports = {
    entry:[
        './app/main.js'
    ],

    output: {
        path: __dirname + '/build/',
        publicPath: "/build/",
        filename: 'main.js'
    },

    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    }
};
