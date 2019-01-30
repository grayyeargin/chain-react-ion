import path from 'path'
import npmSass from 'npm-sass'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

export default (env = {}, argv) => ({
	entry: `./src/js/index.js`,
	output: {
		filename: `js/app.[hash].js`,
		path: path.resolve(__dirname, `docs`),
	},
	devServer: {
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: `babel-loader`,
				},
			},
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: `css-loader`,
					},
					{
						loader: `sass-loader`,
						options: {
							importer: npmSass.importer,
						},
					},
				],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: `html-loader`,
						options: {minimize: true},
					},
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: {
					loader: `file-loader`,
					query: {
						name: `images/[name].[hash].[ext]`,
					},
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin([
			`docs/*`,
		]),
		new HtmlWebPackPlugin({
			template: `./src/index.html`,
			filename: `./index.html`,
		}),
		new MiniCssExtractPlugin({
			filename: `css/app.[hash].css`,
			chunkFilename: `css/[id].[hash].css`,
		}),
	],
})
