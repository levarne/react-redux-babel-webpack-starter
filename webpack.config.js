const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	entry: './src/main.jsx',
	output: {
		filename: 'build.js',
		path: path.resolve(__dirname, 'bin')
	},
	devtool: 'eval-source-map',
	module: {
		rules: [
			{
				test: /(\.jsx$|\.js$)/,
				enforce: "pre",
				include: [
					path.resolve(__dirname, "src"),
				], // only files inside src
				use: [
					{
						loader: "eslint-loader"
					}
				]
			},
			{
				test: /\.scss$/,
				use: [{
					loader: 'style-loader'
				},{
					loader: 'css-loader'
				},{
					loader: 'sass-loader'
				}]
			},
			{
				test: /(\.jsx$|\.js$)/,
				include: [
					path.resolve(__dirname, "src"),
				],
				loader: 'babel-loader',
				query: {
					presets: ['env', 'stage-0', 'react'],
					retainLines: true,
					cacheDirectory: true
				}
			}
		]
	},
	watch: true,
	plugins: [
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			files: ['./*.html', './bin/*.js'],
			server: { baseDir: ['./'] }
		},
		{
			reload: false
		})
	],
};