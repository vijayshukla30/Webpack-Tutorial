const path = require("path");

module.exports = {
    entry: {
        main: ["./src/index.js"]
    },
    mode: "development", //mode for the build
    output: {
        filename: "[name]-bundle.js", //name of the build file
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/" //path from js file will be load
    },
    devServer: {
        contentBase: "dist", //Content will be loded from,
        overlay: true //display error in browser itself
    },
    module: {
        rules: [
            {
                test: /\.css$/,  //regular expression
                use: [
                    { //loader will be in reverse order
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].html"
                        }
                    },
                    {
                        loader: "extract-loader"
                    },
                    {
                        loader: "html-loader",
                        options: {
                            attrs: ["img:src"]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name]-[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    }
};
