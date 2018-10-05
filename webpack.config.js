const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});


module.exports = {


    output: {

        publicPath: '/'
    },
    module: {



        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                    // ,
                    // options: {
                    //       presets: ['react']
                    // }
                }

            },

            {
                test: /\.(png|jpg|gif)$/,

                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            } ,

            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [htmlPlugin]



};


// plugins: [
//     new HtmlWebPackPlugin({
//     template: "./src/index.html",
//     filename: "./index.html"
//   });
// ]