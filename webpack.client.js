const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
config = {
    entry: './src/client/client.js',
    //__dirname is the current folder we are working in 
    output: {
        filename:'bundle.js',
        path: path.resolve(__dirname,'public')
    }
 
};

module.exports = merge(baseConfig, config);