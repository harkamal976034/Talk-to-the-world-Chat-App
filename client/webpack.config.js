const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, "src"),
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			components: path.resolve(__dirname, "src/components/"),
			pages: path.resolve(__dirname, "src/pages/"),
		},
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
		port: 9000,
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				default: false,
				vendors: false,
				async: {
					chunks: "async",
				},
			},
		},
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "public/index.html"),
		}),
	],
};
