const path = require ('path'); //permite hacia donde estamos dentro del directorio (l;ocal o nube)
const HtmlWebpackPlugin = require ('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename: "main.js"
    },
    resolve:{
        extensions: ['.js']
    },
    module:{
        rules: [
            {
                test: /\.js?$/, //Reject
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ //template principal
            inject: true,
            template: './public/index.html',
            filename: './index.html',
        }),
    ]
}