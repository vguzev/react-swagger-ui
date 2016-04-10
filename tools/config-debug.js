import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from "extract-text-webpack-plugin";

const VERBOSE = process.argv.includes('verbose');
const WATCH = global.WATCH === undefined ? false : global.WATCH;

const GLOBALS = {
    'process.env.NODE_ENV': "'development'",
    __DEV__: true
};

const appConfig = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.join(__dirname, '../dist/js'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: './dist',
        hot: false,
        headers: {'Access-Control-Allow-Origin': '*'},
        proxy: {
            '/rest/*': 'http://localhost:8081/rest'
        }
    },
    devtool: '#eval',
    bail: false,
    cache: true,
    debug: true,

    stats: {
        colors: true,
        reasons: true,
        hash: VERBOSE,
        version: VERBOSE,
        timings: true,
        chunks: VERBOSE,
        chunkModules: VERBOSE,
        cached: VERBOSE,
        cachedAssets: VERBOSE
    },

    module: {
        loaders: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /(node_modules)/,
                loaders: [ 'babel']
            },
            {
                test: /\.(jpg|jpeg|png|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file?name=./images/[name].[ext]"
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css?sourceMap!less?sourceMap')
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file?name=./fonts/[name].[ext]"
            },
            {
                test: /\.(woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url?name=./fonts/[name].[ext]"
            }
        ]
    },
    resolve: {
        root: path.resolve(__dirname, '../src'),
        extensions: ['', '.js', '.jsx']
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("./[name].css"),
        new webpack.DefinePlugin(GLOBALS)
    ]
};

export default appConfig;
