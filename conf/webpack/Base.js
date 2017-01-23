'use strict';  // eslint-disable-line

const ExtractTextPlugin = require("extract-text-webpack-plugin");

/**
 * Webpack configuration base class
 */
const fs = require('fs');
const path = require('path');

const npmBase = path.join(__dirname, '../../node_modules');

class WebpackBaseConfig {

	constructor() {
		this._config = {};
	}

	/**
	 * Get the list of included packages
	 * @return {Array} List of included packages
	 */
	get includedPackages() {
		return [].map((pkg) => fs.realpathSync(path.join(npmBase, pkg)));
	}

	/**
	 * Set the config data.
	 * This will always return a new config
	 * @param {Object} data Keys to assign
	 * @return {Object}
	 */
	set config(data) {
		this._config = Object.assign({}, this.defaultSettings, data);
		return this._config;
	}

	/**
	 * Get the global config
	 * @return {Object} config Final webpack config
	 */
	get config() {
		return this._config;
	}

	/**
	 * Get the environment name
	 * @return {String} The current environment
	 */
	get env() {
		return 'dev';
	}

	/**
	 * Get the absolute path to src directory
	 * @return {String}
	 */
	get srcPathAbsolute() {
		return path.resolve('./src');
	}

	/**
	 * Get the absolute path to tests directory
	 * @return {String}
	 */
	get testPathAbsolute() {
		return path.resolve('./test');
	}

	/**
	 * Get the default settings
	 * @return {Object}
	 */
	get defaultSettings() {
		const cssModulesQuery = {
			modules: true,
			importLoaders: 1,
			localIdentName: '[name]-[local]-[hash:base64:5]'
		};

		return {
			context: this.srcPathAbsolute,
			devtool: 'eval',
			devServer: {
				contentBase: './src/',
				publicPath: '/assets/',
				historyApiFallback: true,
				hot: true,
				inline: true,
				port: 8000
			},
			entry: './index.js',
			module: {
				rules: [
					{
						enforce: 'pre',
						test: /\.js?$/,
						include: this.srcPathAbsolute,
						loader: 'babel-loader',
						query: {
							presets: ['es2015']
						}
					},
					{
						test: /^.((?!cssmodule).)*\.css$/,
						loaders: [
							{ loader: 'style-loader' },
							{ loader: 'css-loader' }
						]
					},
					{
						test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2)$/,
						loader: 'file-loader'
					},
					{
						test: /^.((?!cssmodule).)*\.(sass|scss)$/,
						loaders: [
							{ loader: 'style-loader' },
							{ loader: 'css-loader' },
							{ loader: 'sass-loader' }
						]
					},
					{
						test: /\.json$/,
						loader: 'json-loader'
					},
					{
						test: /\.(js|jsx)$/,
						include: [].concat(
								this.includedPackages,
								[this.srcPathAbsolute]
						),
						loaders: [
							// Note: Moved this to .babelrc
							{ loader: 'react-hot-loader' },
							{ loader: 'babel-loader' }
						]
					},
					{
						test: /\.cssmodule\.(sass|scss)$/,
						// sassLoader will include node_modules explicitly.
						// we extract the styles into their own .css file instead of having
						// them inside the js.
						loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
					},
					{
						test: /\.cssmodule\.css$/,
						loaders: [
							{ loader: 'style-loader' },
							{
								loader: 'css-loader',
								query: cssModulesQuery
							}
						]
					}
				]
			},
			output: {
				path: path.resolve('./assets'),
				filename: 'app.js',
				publicPath: './assets/'
			},
			plugins: [
				new ExtractTextPlugin('css/[name].css')
			],
			resolve: {
				alias: {
					actions: `${this.srcPathAbsolute}/actions/`,
					components: `${this.srcPathAbsolute}/components/`,
					config: `${this.srcPathAbsolute}/config/${this.env}.js`,
					images: `${this.srcPathAbsolute}/images/`,
					sources: `${this.srcPathAbsolute}/sources/`,
					stores: `${this.srcPathAbsolute}/stores/`,
					styles: `${this.srcPathAbsolute}/styles/`
				},
				extensions: ['.js', '.jsx'],
				modules: [
					this.srcPathAbsolute,
					'node_modules'
				]
			}
		};
	}
}

module.exports = WebpackBaseConfig;
