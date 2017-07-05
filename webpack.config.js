var htmlPlugin = require('html-webpack-plugin')
module.exports = {
	devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
	entry : {
		'app':'./src/app.js'
	},

	output : {
		path: __dirname + '/build',
		filename : 'bundle.js'
	},


	//定义webserver  npm i webpack-dev-server -D/npm i webpack-dev-server -g
	devServer: {
	    contentBase: './build',
	    host: 'localhost',
	    port: 7777
	},

	 plugins: [
	    // 根据模板生成html
	    new htmlPlugin({
	     title:'my weapp',
	     //src=bundle.js?22b9692e22e7be37b57e
	     hash:true,
	      chunks: ['app','jquery']
	    })
    ]

}