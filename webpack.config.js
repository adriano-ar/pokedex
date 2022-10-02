const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: "./src/index.html",
            filename: "index.html",
            inject: "body",
        }),
    ],
    entry: "./src/index.tsx",
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        static: "./dist",
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-react",
                                    { runtime: "automatic" },
                                    "@babel/preset-typescript",
                                ],
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                type: "asset/resource",
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};
