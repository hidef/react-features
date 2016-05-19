module.exports = {
    target: 'web',
    entry: './src/index.js',
    output: {
        path: './dist',
        publicPath: "/dist/",
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)/,
                loader: 'jsx-loader?harmony!babel'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }, {
                test: /\.less$/,
                loader: "style!css!less"
            },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }, // inline base64 URLs for <=8k images, direct URLs for the rest
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
};