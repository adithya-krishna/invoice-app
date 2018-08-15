const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const reactToolboxVariables = require('./css-overrides');

const extractSass = new ExtractTextPlugin({
	filename: 'app.css'
});

const postcssOpts = {
	sourceMap: true,
	plugins: () => {
		return [
			postcssPresetEnv({
				stage: 0,
				features: {
					'custom-properties': {
						preserve: false,
						variables: reactToolboxVariables
					}
				}
			})
		];
	}
};

const vendorStyleLoaders = [
	{
		loader: 'css-loader',
		query: {
			modules: true,
			sourceMap: true,
			importLoaders: 1,
			localIdentName: '[name]__[local]--[hash:base64:5]',
			minimize: false
		}
	},
	{
		loader: 'postcss-loader',
		options: postcssOpts
	}
];

const loaders = [
	{
		loader: 'css-loader',
		query: {
			modules: true,
			sourceMap: true,
			importLoaders: 2,
			localIdentName: '[name]__[local]--[hash:base64:5]',
			minimize: false,
			url: false
		}
	},
	{
		loader: 'postcss-loader',
		options: postcssOpts
	},
	{
		loader: 'sass-loader',
		options: {
			sourceMap: true,
			outputStyle: 'expanded',
			includePaths: [path.resolve(__dirname, 'app'), 'node_modules']
		}
	}
];

const baseConfig = {
	context: __dirname,

	devtool: 'cheap-module-eval-source-map',

	entry: ['babel-polyfill', path.resolve(__dirname, 'app')],

	devServer: {
		historyApiFallback: true,
		compress: true,
		progress: true,
		inline: true,
		hot: true,
		contentBase: 'app',
		port: 8080
	},

	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: 'app.bundle.js',
		sourceMapFilename: '[file].map',
		chunkFilename: '[id].chunk.js'
	},

	resolve: {
		extensions: ['.js', '.jsx', '.json', '.scss'],
		modules: [path.resolve(__dirname, 'app'), 'node_modules']
	},

	module: {
		rules: [
			{
				test: /\.js[x]?$/,
				use: 'source-map-loader',
				enforce: 'pre'
			},
			{
				test: /\.js[x]?$/,
				include: path.resolve(__dirname, 'app'),
				exclude: [path.resolve(__dirname, 'node_modules')],
				use: {
					loader: 'babel-loader',
					query: {
						cacheDirectory: true
					}
				}
			},
			{
				test: /(\.scss)$/,
				use: extractSass.extract({
					fallback: 'style-loader',
					use: loaders
				})
			},
			{
				test: /(\.css)$/,
				use: extractSass.extract({
					fallback: 'style-loader',
					use: vendorStyleLoaders
				})
			}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		extractSass
	]
};

module.exports = baseConfig;
