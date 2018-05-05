const path = require('path')

module.exports = {
	entry: './src/app/main.js',
	output:{
		path: path.join(__dirname , 'src/public/js'),
		filename:'bundle.js'
	},
	
	/*module:{
		loaders:[
			{
				test:/\.js$/,
				loader: 'babel-loader',
				exclude: /node-modules/
			},
			{
				test: /\.vue$/,
				exclude: /node-modules/,
				use:{
					loader: 'vue-loader',
				}
			}
		]
	}*/
	resolve: {
	    alias: {
	      'vue$': 'vue/dist/vue.esm.js'
	    },
	    extensions: ['*', '.js', '.vue', '.json']
	},
	 module: {
	    rules: [
			{
	        test: /\.vue$/,
	        loader: 'vue-loader',
	        options: {
	          loaders: {
	          }
	          // other vue-loader options go here
	        }
	      },
	      {
	        test: /\.js$/,
	        loader: 'babel-loader',
	        exclude: /node_modules/
	      }
	    ]
	  },
}